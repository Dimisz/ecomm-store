using API.Data;
using API.DTOs;
using API.Entities;
using API.Extensions;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class CartController : BaseApiController
    {
        private readonly StoreContext _context;
        public CartController(StoreContext context)
        {
            _context = context;
        }

        // ENDPOINTS
        // fetch a cart
        [HttpGet(Name = "GetCart")]
        public async Task<ActionResult<CartDto>> GetCart()
        {
            Cart cart = await RetrieveCart(GetBuyerId());

            if (cart == null) return NotFound();
            return cart.MapCartToDto();
        }


        // add a product to the cart
        [HttpPost] // args coming from 'api/basket?productId=3&quantity=2'
        public async Task<ActionResult<CartDto>> AddItemToCart(int productId, int quantity)
        {
            // get cart
            // if user doesn't have cart (first product added) -> create a cart
            Cart cart = await RetrieveCart(GetBuyerId());
            if (cart == null) cart = CreateCart();
            // get related products
            Product product = await _context.Products.FindAsync(productId);
            if (product == null) return BadRequest(new ProblemDetails { Title = "Product not found" });
            // add item
            if (quantity <= 0) return BadRequest(new ProblemDetails { Title = "Quantity should be greater than 0" });
            cart.AddItem(product, quantity);

            // save changes
            bool result = await _context.SaveChangesAsync() > 0;
            if (result) return CreatedAtRoute("GetCart", cart.MapCartToDto());
            return BadRequest(new ProblemDetails { Title = "Problem saving item to cart" });
        }
        // remove a product from the cart
        [HttpDelete]
        public async Task<ActionResult> RemoveCartItem(int productId, int quantity)
        {
            // get the cart
            Cart cart = await RetrieveCart(GetBuyerId());
            if (cart == null) return BadRequest(new ProblemDetails { Title = "No products in the cart" });

            // check if the product exist in the catalog
            Product product = await _context.Products.FindAsync(productId);
            if (product == null) return BadRequest(new ProblemDetails { Title = "The product is not in the catalog" });
            // should not happen -> extra safety measures
            if (quantity <= 0) return BadRequest(new ProblemDetails { Title = "Quantity to remove should be greater than 0" });
            // check if the selected product is in the cart
            CartItem item = cart.Items.FirstOrDefault(item => item.ProductId == productId);
            if (item == null) return BadRequest(new ProblemDetails { Title = "The product is not in the cart" });
            // remove the item or reduce qty
            cart.RemoveItem(productId, quantity);

            // save changes
            bool result = await _context.SaveChangesAsync() > 0;
            if (result) return StatusCode(201);
            return BadRequest(new ProblemDetails { Title = "Problem removing item from the cart" });
        }

        // helper method to get cart
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
                .FirstOrDefaultAsync(x => x.BuyerId == buyerId);
        }

        private string GetBuyerId()
        {
            return User.Identity?.Name ?? Request.Cookies["buyerId"];
        }

        private Cart CreateCart()
        {
            string buyerId = User.Identity?.Name;
            if (string.IsNullOrEmpty(buyerId))
            {
                buyerId = Guid.NewGuid().ToString();
                var cookieOptions = new CookieOptions
                {
                    IsEssential = true,
                    Expires = DateTime.Now.AddDays(30)
                };
                Response.Cookies.Append("buyerId", buyerId, cookieOptions);
            }
            Cart cart = new Cart { BuyerId = buyerId };
            _context.Carts.Add(cart);
            return cart;
        }
    }
}