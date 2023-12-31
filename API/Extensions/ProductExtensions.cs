using API.Entities;

namespace API.Extensions
{
    public static class ProductExtensions
    {
        public static IQueryable<Product> Sort(this IQueryable<Product> query, string orderBy)
        {
            if (string.IsNullOrWhiteSpace(orderBy)) return query.OrderBy(p => p.Name);

            query = orderBy switch
            {
                "price" => query.OrderBy(p => p.Price),
                "priceDesc" => query.OrderByDescending(p => p.Price),
                _ => query.OrderBy(p => p.Name)
            };
            return query;
        }

        public static IQueryable<Product> Search(this IQueryable<Product> query, string searchTerm)
        {
            if (string.IsNullOrEmpty(searchTerm) || string.IsNullOrWhiteSpace(searchTerm)) return query;

            List<string> searchTerms = new List<string>();
            searchTerms.AddRange(searchTerm.ToLower().Split(" ").ToList());

            if (searchTerms.Count == 0) return query;

            foreach (string term in searchTerms)
            {
                query = query.Where(p =>
                    p.Brand.ToLower().Contains(term)
                    || p.Name.ToLower().Contains(term)
                    || p.Type.ToLower().Contains(term)
                );
            }

            return query;
        }

        public static IQueryable<Product> Filter(this IQueryable<Product> query, string brands, string types)
        {
            List<string> brandsList = new List<string>();
            List<string> typesList = new List<string>();

            if (!string.IsNullOrEmpty(brands) && !string.IsNullOrWhiteSpace(brands))
            {
                brandsList.AddRange(brands.ToLower().Split(",").ToList());
            }

            if (!string.IsNullOrEmpty(types) && !string.IsNullOrWhiteSpace(types))
            {
                typesList.AddRange(types.ToLower().Split(",").ToList());
            }

            query = query.Where(p => brandsList.Count == 0 || brandsList.Contains(p.Brand.ToLower()));
            query = query.Where(p => typesList.Count == 0 || typesList.Contains(p.Type.ToLower()));

            return query;
        }




    }
}