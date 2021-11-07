using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using coreClothes.Models;
using coreClothes.DB;


namespace coreClothes.DAL
{
    public class CategoryDAL
    {
        MySQLPersistence _bd = new MySQLPersistence();

        public IEnumerable<Category> GetAll()
        {
            List<Category> category = new List<Category>();

            string sql = @"select * 
                           from category";
   

            DataTable dt = _bd.ExecutarSelect(sql);

            foreach (DataRow row in dt.Rows)
            {
                category.Add(Map(row));
            }

            return category;
        }

        public Category GetById(int id)
        {
            string sql = @"select * 
                           from category 
                           where id = @id";

            Dictionary<string, object> parameters = new Dictionary<string, object>();
            parameters.Add("@id", id);

            DataTable dt = _bd.ExecutarSelect(sql, parameters);

            if (dt.Rows.Count == 0)
                return null;
            else
            {
                Category c = Map(dt.Rows[0]);

                return c;
            }

        }

        public IEnumerable<Category> Search(string name)
        {
            List<Category> category = new List<Category>();

            string sql = @"select * 
                           from Product 
                           where name = @name";

            Dictionary<string, object> parameters = new Dictionary<string, object>();
            parameters.Add("@name", name);

            DataTable dt = _bd.ExecutarSelect(sql, parameters);

            foreach (DataRow row in dt.Rows)
            {
                category.Add(Map(row));
            }

            return category;
        }

        private Category Map(DataRow row)
        {
            Category c = new Category()
            {
                Id = Convert.ToInt32(row["id"]),
                Name = row["name"].ToString(),
            };

            return c;
        }

    }
}
