﻿using System;
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
                sql = @"insert into product (name, stock, price, category_id) values (@name, @stock, @price, @category_id)";
            }
            else
            {
                sql = @"update product set name = @name, stock = @stock, price = @price, category_id = @category_id
                        where id = @id";

                parameters.Add("@id", product.Id);
            }

            parameters.Add("@name", product.Name);
            parameters.Add("@stock", product.Stock);
            parameters.Add("@price", product.Price);
            parameters.Add("@category_id", product.Category.Id);
            
            if (_bd.ExecutarNonQuery(sql, parameters) == 1)
            {
                if (product.Id == 0)
                {
                    product.Id = _bd.UltimoId ;
                }

                success = true;
            }

            return success;
        }

        public Product GetById(int id)
        {
            string sql = @"select * 
                           from product 
                           where id = @id";

            Dictionary<string, object> parameters = new Dictionary<string, object>();
            parameters.Add("@id", id);

            DataTable dt = _bd.ExecutarSelect(sql, parameters);

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

            string sql = @"select * 
                           from product 
                           where name = @name";

            Dictionary<string, object> parameters = new Dictionary<string, object>();
            parameters.Add("@name", name);

            DataTable dt = _bd.ExecutarSelect(sql, parameters);

            foreach (DataRow row in dt.Rows)
            {
                products.Add(Map(row));
            }

            return products;
        }

        private Product Map(DataRow row)
        {
            Product u = new Product()
            {
                Id = Convert.ToInt32(row["id"]),
                Name = row["name"].ToString(),
                Price = Convert.ToDouble(row["price"].ToString()),
                Stock = Convert.ToInt32(row["stock"].ToString()),
                //Category = row["category"][""]
            };

            return u;
        }

    }
}