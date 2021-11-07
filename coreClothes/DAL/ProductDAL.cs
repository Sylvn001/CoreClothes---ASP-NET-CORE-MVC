using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using coreClothes.Models;
using coreClothes.DB;


namespace coreClothes.DAL
{
    public class ProductDAL
    {
        MySQLPersistence _bd = new MySQLPersistence();

        public IEnumerable<Product> GetAll()
        {
            List<Product> Products = new List<Product>();

            string sql = @"select * 
                           from product";
   

            DataTable dt = _bd.ExecutarSelect(sql);

            foreach (DataRow row in dt.Rows)
            {
                Products.Add(Map(row));
            }

            return Products;
        }

        public Product GetById(int id)
        {
            string sql = @"select * 
                           from Product 
                           where id = @id";

            Dictionary<string, object> parameters = new Dictionary<string, object>();
            parameters.Add("@id", id);

            DataTable dt = _bd.ExecutarSelect(sql, parameters);

            if (dt.Rows.Count == 0)
                return null;
            else
            {
                Product p = Map(dt.Rows[0]);

                return p;
            }

        }

        public IEnumerable<Product> Search(string name)
        {
            List<Product> Products = new List<Product>();

            string sql = @"select * 
                           from Product 
                           where name = @name";

            Dictionary<string, object> parameters = new Dictionary<string, object>();
            parameters.Add("@name", name);

            DataTable dt = _bd.ExecutarSelect(sql, parameters);

            foreach (DataRow row in dt.Rows)
            {
                Products.Add(Map(row));
            }

            return Products;
        }

        private Product Map(DataRow row)
        {
            Product p = new Product()
            {
                Id = Convert.ToInt32(row["id"]),
                Name = row["name"].ToString(),
                Price = Convert.ToDouble(row["price"])
            };

            return p;
        }

    }
}
