using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Data.Migrations
{
    /// <inheritdoc />
    public partial class OrderEntityAdded : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "ZipOrPostalCode",
                table: "UserAddress",
                newName: "Zip");

            migrationBuilder.RenameColumn(
                name: "StateOrProvince",
                table: "UserAddress",
                newName: "State");

            migrationBuilder.RenameColumn(
                name: "ShippingAddress_ZipOrPostalCode",
                table: "Orders",
                newName: "ShippingAddress_Zip");

            migrationBuilder.RenameColumn(
                name: "ShippingAddress_StateOrProvince",
                table: "Orders",
                newName: "ShippingAddress_State");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Zip",
                table: "UserAddress",
                newName: "ZipOrPostalCode");

            migrationBuilder.RenameColumn(
                name: "State",
                table: "UserAddress",
                newName: "StateOrProvince");

            migrationBuilder.RenameColumn(
                name: "ShippingAddress_Zip",
                table: "Orders",
                newName: "ShippingAddress_ZipOrPostalCode");

            migrationBuilder.RenameColumn(
                name: "ShippingAddress_State",
                table: "Orders",
                newName: "ShippingAddress_StateOrProvince");
        }
    }
}
