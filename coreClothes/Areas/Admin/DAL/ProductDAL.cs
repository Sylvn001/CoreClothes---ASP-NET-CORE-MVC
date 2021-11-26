using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using coreClothes.Areas.Admin.Models;
using coreClothes.DB;

namespace coreClothes.Areas.Admin.DAL
{
    public class ProductDAL
    {

        MySQLPersistence _bd = new MySQLPersistence();

        public bool Save(Product product)
        {
            bool success = false;
            string sql;
            Dictionary<string, object> parameters = new Dictionary<string, object>();
            if (product.Id == 0)
            {
                sql = "insert into product (name, category_id, price, stock, urlImg) values (@name, @category_id, @price, @stock, @urlImg)";
            }
            else
            {
                sql = "update product set name = @name, category_id = @category_id, price = @price, stock = @stock, urlImg = @urlImg where id = @id";
                parameters.Add("@id", product.Id);
            }

            parameters.Add("@name", product.Name);
            parameters.Add("@stock", product.Stock);
            parameters.Add("@price", product.Price);
            parameters.Add("@urlImg", product.UrlImg);
            parameters.Add("@category_id", product.Category.Id);

            _bd.AbrirConexao();
            if (_bd.ExecutarNonQuery(sql, parameters) == 1)                    
                success = true;
              
            _bd.FecharConexao();
            return success;
        }

        public Product GetById(int id)
        {
            string sql = "SELECT p.*, c.name as cat_name, c.id as cat_id FROM product as p join category as c on p.category_id = c.id where p.id = @id";

            Dictionary<string, object> parameters = new Dictionary<string, object>();
            parameters.Add("@id", id);

            _bd.AbrirConexao();
            DataTable dt = _bd.ExecutarSelect(sql, parameters);
            _bd.FecharConexao();
    
            if (dt.Rows.Count == 0)
                return null;
            else
            {
                Product u = Map(dt.Rows[0]);

                return u;
            }

        }

        public IEnumerable<Product> Search(string name)
        {
            List<Product> products = new List<Product>();

            string sql = @"SELECT p.*, c.name as cat_name, c.id as cat_id FROM product as p join category as c on p.category_id = c.id where p.name LIKE @pname";

            Dictionary<string, object> parameters = new Dictionary<string, object>();
            parameters.Add("@pname", "%" + name + "%");

            _bd.AbrirConexao();

            DataTable dt = _bd.ExecutarSelect(sql, parameters);
            foreach (DataRow row in dt.Rows)
            {
                products.Add(Map(row));
            }

            _bd.FecharConexao();

            return products;
        }

        public bool Delete(int id)
        {
            bool flag = false;
            string sql = "delete from product where id = @id";
            Dictionary<string, object> parameters = new Dictionary<string, object>();
            parameters.Add("@id",id);

            _bd.AbrirConexao();
            if (_bd.ExecutarNonQuery(sql, parameters) == 1)
                flag = true;
            _bd.FecharConexao();

            return flag;
        }

        private Product Map(DataRow row)
        {
            Product u = new Product()
            {
                Id = Convert.ToInt32(row["id"]),
                Name = row["name"].ToString(),
                Price = Convert.ToDecimal(row["price"].ToString()),
                UrlImg = row["urlImg"].ToString(),
                Stock = Convert.ToInt32(row["stock"].ToString()),
                Category = new Category(Convert.ToInt32(row["cat_id"].ToString()), row["cat_name"].ToString()),
            };

            return u;
        }

    }
}
