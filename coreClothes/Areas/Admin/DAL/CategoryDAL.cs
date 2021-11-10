using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using coreClothes.Areas.Admin.Models;
using coreClothes.DB;

namespace coreClothes.Areas.Admin.DAL
{
    public class CategoryDAL
    {

        MySQLPersistence _bd = new MySQLPersistence();

        public bool Save(Category category)
        {
            bool success = false;
            string sql;
            Dictionary<string, object> parameters = new Dictionary<string, object>();
            if (category.Id == 0)
            {
                sql = @"insert into Category (name) values (@name)";
            }
            else
            {
                sql = @"update Category set name = @name
                        where id = @id";

                parameters.Add("@id", category.Id);
            }

            parameters.Add("@name", category.Name);
            
            if (_bd.ExecutarNonQuery(sql, parameters) == 1)  
                success = true;
            

            return success;
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
            List<Category> categories = new List<Category>();

            string sql = @"select * 
                           from category 
                           where name = @name";

            Dictionary<string, object> parameters = new Dictionary<string, object>();
            parameters.Add("@name", "%" + name + "%");

            _bd.AbrirConexao();
            DataTable dt = _bd.ExecutarSelect(sql, parameters);

            foreach (DataRow row in dt.Rows)
            {
                categories.Add(Map(row));
            }

            _bd.FecharConexao();

            return categories;
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
