namespace API.Entities
{
    public class Cart
    {
        public int Id { get; set; }
        public string BuyerId { get; set; }
        public List<CartItem> Items { get; set; } = new List<CartItem>();
        public string PaymentIntentId { get; set; }
        public string ClientSecret { get; set; }

        public void AddItem(Product product, int quantity)
        {
            if (Items.All(item => item.ProductId != product.Id))
            {
                Items.Add(new CartItem { Product = product, Quantity = quantity });
            }

            CartItem existingItem = Items.FirstOrDefault(item => item.ProductId == product.Id);
            if (existingItem != null) existingItem.Quantity += quantity;
        }

        public void RemoveItem(int productId, int quantity)
        {
            CartItem item = Items.FirstOrDefault(item => item.ProductId == productId);
            if (item == null) return;
            item.Quantity -= quantity;
            if (item.Quantity <= 0)
            {
                Items.Remove(item);
            }
        }
    }

}