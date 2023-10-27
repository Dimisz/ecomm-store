using API.Data;
using API.DTOs;
using API.Entities;
using API.Extensions;
using API.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SQLitePCL;

namespace API.Controllers
{
    public class AccountController : BaseApiController
    {
        private readonly StoreContext _context;
        private readonly UserManager<User> _userManager;
        private readonly TokenService _tokenService;

        public AccountController(UserManager<User> userManager, TokenService tokenService, StoreContext context)
        {
            _context = context;
            _userManager = userManager;
            _tokenService = tokenService;
        }

        [HttpPost("login")]
        public async Task<ActionResult<UserDto>> Login(LoginDto loginDto)
        {
            User user = await _userManager.FindByNameAsync(loginDto.UserName);
            if (user == null || !await _userManager.CheckPasswordAsync(user, loginDto.Password))
            {
                return Unauthorized();
            }

            Cart userCart = await RetrieveCart(loginDto.UserName);
            Cart anonCart = await RetrieveCart(Request.Cookies["buyerId"]);

            if (anonCart != null)
            {
                if (userCart != null)
                {
                    _context.Carts.Remove(userCart);
                }
                anonCart.BuyerId = user.UserName;
                Response.Cookies.Delete("buyerId");
                await _context.SaveChangesAsync();

            }
            return new UserDto
            {
                Email = user.Email,
                Token = await _tokenService.GenerateToken(user),
                Cart = anonCart != null ? anonCart.MapCartToDto() : userCart?.MapCartToDto()
            };
        }

        private async Task<Cart> RetrieveCart(string buyerId)
        {
            if (string.IsNullOrEmpty(buyerId))
            {
                Response.Cookies.Delete("buyerId");
                return null;
            }
            return await _context.Carts
                .Include(i => i.Items)
                .ThenInclude(p => p.Product)
            // .FirstOrDefaultAsync(x => x.BuyerId == Request.Cookies["buyerId"]);
            .FirstOrDefaultAsync(cart => cart.BuyerId == buyerId);
        }

        [HttpPost("register")]
        public async Task<ActionResult> Register(RegisterDto registerDto)
        {
            User user = new User { UserName = registerDto.UserName, Email = registerDto.Email };
            var result = await _userManager.CreateAsync(user, registerDto.Password);

            if (!result.Succeeded)
            {
                foreach (var error in result.Errors)
                {
                    ModelState.AddModelError(error.Code, error.Description);
                }

                return ValidationProblem();
            }

            await _userManager.AddToRoleAsync(user, "Member");
            return StatusCode(201);
        }

        [Authorize]
        [HttpGet("currentUser")]
        public async Task<ActionResult<UserDto>> GetCurrentUser()
        {
            User user = await _userManager.FindByNameAsync(User.Identity.Name);
            Cart userCart = await RetrieveCart(User.Identity.Name);
            return new UserDto
            {
                Email = user.Email,
                Token = await _tokenService.GenerateToken(user),
                Cart = userCart?.MapCartToDto()
            };
        }

    }
}