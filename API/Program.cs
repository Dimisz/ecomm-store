using API.Data;
using API.Entities;
using API.Middleware;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
//adding DbContext 
builder.Services.AddDbContext<StoreContext>(opt =>
{
    // connection string added in appsettings.Development.json
    opt.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection"));
});

//configure CORS
builder.Services.AddCors();
// configure Identity
builder.Services.AddIdentityCore<User>()
    .AddRoles<IdentityRole>()
    .AddEntityFrameworkStores<StoreContext>();
// configuring authentication and authorization
builder.Services.AddAuthentication(); // to configure later
builder.Services.AddAuthorization(); // to configure later

var app = builder.Build();

// Configure the HTTP request pipeline.
// app.UseDeveloperExceptionPage();
app.UseMiddleware<ExceptionMiddleware>();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// adding allowed hosts
app.UseCors(opt =>
{
    opt.AllowAnyHeader().AllowAnyMethod().AllowCredentials().WithOrigins("http://localhost:5173");
});

app.UseAuthorization();

app.MapControllers();

// populating the products into the db
var scope = app.Services.CreateScope();
var context = scope.ServiceProvider.GetRequiredService<StoreContext>();

var userManager = scope.ServiceProvider.GetRequiredService<UserManager<User>>();

var logger = scope.ServiceProvider.GetRequiredService<ILogger<Program>>();
try
{
    await context.Database.MigrateAsync();
    await DbInitializer.Initialize(context, userManager);
}
catch (Exception ex)
{
    logger.LogError(ex, "A problem occurred during migration");
}


app.Run();
