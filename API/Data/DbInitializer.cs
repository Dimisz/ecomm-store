using API.Entities;
using Microsoft.AspNetCore.Identity;

namespace API.Data
{
    public static class DbInitializer
    {
        public static async Task Initialize(StoreContext context, UserManager<User> userManager)
        {
            if (!userManager.Users.Any())
            {
                User user = new User
                {
                    UserName = "bob",
                    Email = "bob@test.com"
                };

                await userManager.CreateAsync(user, "Pa$$w0rd");
                await userManager.AddToRoleAsync(user, "Member");

                User admin = new User
                {
                    UserName = "admin",
                    Email = "admin@test.com"
                };

                await userManager.CreateAsync(admin, "Pa$$w0rd");
                await userManager.AddToRolesAsync(admin, new[] { "Member", "Admin" });
            }
            if (context.Products.Any()) return;

            List<Product> products = new List<Product>
            {
                new Product
                {
                    Name = "Brown Brim",
                    Description =
                                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Price = 2500,
                    PictureUrl = "https://i.ibb.co/ZYW3VTp/brown-brim.png",
                    Brand = "Generic",
                    Type = "Hats",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Blue Beanie",
                    Description =
                                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Price = 1800,
                    PictureUrl = "https://i.ibb.co/ypkgK0X/blue-beanie.png",
                    Brand = "Generic",
                    Type = "Hats",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Brown Cowboy",
                    Description =
                                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Price = 3500,
                    PictureUrl = "https://i.ibb.co/QdJwgmp/brown-cowboy.png",
                    Brand = "Generic",
                    Type = "Hats",
                    QuantityInStock = 100
                },

                new Product
                {
                    Name = "Grey Brim",
                    Description =
                                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Price = 2500,
                    PictureUrl = "https://i.ibb.co/RjBLWxB/grey-brim.png",
                    Brand = "Generic",
                    Type = "Hats",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Green Beanie",
                    Description =
                                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Price = 1800,
                    PictureUrl = "https://i.ibb.co/YTjW3vF/green-beanie.png",
                    Brand = "Generic",
                    Type = "Hats",
                    QuantityInStock = 100
                },

                new Product
                {
                    Name = "Palm Tree Cap",
                    Description =
                                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Price = 1400,
                    PictureUrl = "https://i.ibb.co/rKBDvJX/palm-tree-cap.png",
                    Brand = "Generic",
                    Type = "Hats",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Red Beanie",
                    Description =
                                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Price = 1800,
                    PictureUrl = "https://i.ibb.co/bLB646Z/red-beanie.png",
                    Brand = "Generic",
                    Type = "Hats",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Wolf Cap",
                    Description =
                                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Price = 1400,
                    PictureUrl = "https://i.ibb.co/1f2nWMM/wolf-cap.png",
                    Brand = "Generic",
                    Type = "Hats",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Blue Snapback",
                    Description =
                                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Price = 1600,
                    PictureUrl = "https://i.ibb.co/X2VJP2W/blue-snapback.png",
                    Brand = "Generic",
                    Type = "Hats",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Adidas NMD",
                    Description =
                                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Price = 22000,
                    PictureUrl = "https://i.ibb.co/0s3pdnc/adidas-nmd.png",
                    Brand = "Adidas",
                    Type = "Sneakers",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Adidas Yeezy",
                    Description =
                                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Price = 28000,
                    PictureUrl = "https://i.ibb.co/dJbG1cT/yeezy.png",
                    Brand = "Adidas",
                    Type = "Sneakers",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Black Converse",
                    Description =
                                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Price = 11000,
                    PictureUrl = "https://i.ibb.co/bPmVXyP/black-converse.png",
                    Brand = "Converse",
                    Type = "Sneakers",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Nike White AirForce",
                    Description =
                                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Price = 16000,
                    PictureUrl = "https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",
                    Brand = "Nike",
                    Type = "Sneakers",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Nike Red High Tops",
                    Description =
                                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Price = 16000,
                    PictureUrl = "https://i.ibb.co/QcvzydB/nikes-red.png",
                    Brand = "Nike",
                    Type = "Sneakers",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Nike Brown High Tops",
                    Description =
                                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Price = 16000,
                    PictureUrl = "https://i.ibb.co/fMTV342/nike-brown.png",
                    Brand = "Nike",
                    Type = "Sneakers",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Air Jordan Limited",
                    Description =
                                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Price = 19000,
                    PictureUrl = "https://i.ibb.co/w4k6Ws9/nike-funky.png",
                    Brand = "Nike",
                    Type = "Sneakers",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Timberlands",
                    Description =
                                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Price = 20000,
                    PictureUrl = "https://i.ibb.co/Mhh6wBg/timberlands.png",
                    Brand = "Timberlands",
                    Type = "Sneakers",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Black Jean Shearling",
                    Description =
                                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Price = 12500,
                    PictureUrl = "https://i.ibb.co/XzcwL5s/black-shearling.png",
                    Brand = "Generic",
                    Type = "Jackets",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Blue Jean Jacket",
                    Description =
                                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Price = 9000,
                    PictureUrl = "https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",
                    Brand = "Generic",
                    Type = "Jackets",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Grey Jean Jacket",
                    Description =
                                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Price = 9000,
                    PictureUrl = "https://i.ibb.co/N71k1ML/grey-jean-jacket.png",
                    Brand = "Generic",
                    Type = "Jackets",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Brown Shearling",
                    Description =
                                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Price = 16500,
                    PictureUrl = "https://i.ibb.co/s96FpdP/brown-shearling.png",
                    Brand = "Generic",
                    Type = "Jackets",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Tan Trench",
                    Description =
                                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Price = 18500,
                    PictureUrl = "https://i.ibb.co/M6hHc3F/brown-trench.png",
                    Brand = "Generic",
                    Type = "Jackets",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Blue Tanktop",
                    Description =
                                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Price = 2500,
                    PictureUrl = "https://i.ibb.co/7CQVJNm/blue-tank.png",
                    Brand = "Generic",
                    Type = "Womens",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Floral Blouse",
                    Description =
                                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Price = 2000,
                    PictureUrl = "https://i.ibb.co/4W2DGKm/floral-blouse.png",
                    Brand = "Generic",
                    Type = "Womens",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Floral Dress",
                    Description =
                                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Price = 3000,
                    PictureUrl = "https://i.ibb.co/KV18Ysr/floral-skirt.png",
                    Brand = "Generic",
                    Type = "Womens",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Red Dots Dress",
                    Description =
                                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Price = 8000,
                    PictureUrl = "https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",
                    Brand = "Generic",
                    Type = "Womens",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Striped Sweater",
                    Description =
                                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Price = 4500,
                    PictureUrl = "https://i.ibb.co/KmSkMbH/striped-sweater.png",
                    Brand = "Generic",
                    Type = "Womens",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Yellow Track Suit",
                    Description =
                                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Price = 13500,
                    PictureUrl = "https://i.ibb.co/v1cvwNf/yellow-track-suit.png",
                    Brand = "Generic",
                    Type = "Womens",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "White Blouse",
                    Description =
                                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Price = 2000,
                    PictureUrl = "https://i.ibb.co/qBcrsJg/white-vest.png",
                    Brand = "Generic",
                    Type = "Womens",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Camo Down Vest",
                    Description =
                                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Price = 32500,
                    PictureUrl = "https://i.ibb.co/xJS0T3Y/camo-vest.png",
                    Brand = "Generic",
                    Type = "Mens",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Floral T-shirt",
                    Description =
                                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Price = 2000,
                    PictureUrl = "https://i.ibb.co/qMQ75QZ/floral-shirt.png",
                    Brand = "Generic",
                    Type = "Mens",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Black & White Longsleeve",
                    Description =
                                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Price = 2500,
                    PictureUrl = "https://i.ibb.co/55z32tw/long-sleeve.png",
                    Brand = "Generic",
                    Type = "Mens",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Pink T-shirt",
                    Description =
                                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Price = 2500,
                    PictureUrl = "https://i.ibb.co/RvwnBL8/pink-shirt.png",
                    Brand = "Generic",
                    Type = "Mens",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Jean Long Sleeve",
                    Description =
                                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Price = 4000,
                    PictureUrl = "https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",
                    Brand = "Generic",
                    Type = "Mens",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Burgundy T-shirt",
                    Description =
                                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Price = 2500,
                    PictureUrl = "https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",
                    Brand = "Generic",
                    Type = "Mens",
                    QuantityInStock = 100
                }

            };

            foreach (Product product in products)
            {
                context.Products.Add(product);
            }

            context.SaveChanges();
        }
    }
}