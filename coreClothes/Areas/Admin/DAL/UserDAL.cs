using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using coreClothes.Areas.Admin.Models;
using coreClothes.DB;


namespace coreClothes.Areas.Admin.DAL
{
    public class UserDAL
    {
        MySQLPersistence _bd = new MySQLPersistence();

        public bool Save(User user)
        {
            bool success = false;
            string sql;
            Dictionary<string, object> parameters = new Dictionary<string, object>();
            if (user.Id == 0)
            {
                sql = @"insert into user (email, password) values (@email, @password)";
            }
            else
            {
                sql = @"update user set email = @email, password = @password 
                        where id = @id";

                parameters.Add("@id", user.Id);
            }

            parameters.Add("@email", user.Email);
            parameters.Add("@password", user.Password);
            
            if (_bd.ExecutarNonQuery(sql, parameters) == 1)
            {
                success = true;
            }

            return success;
        }

        public User GetById(int id)
        {
            string sql = @"select * 
                           from User 
                           where id = @id";

            Dictionary<string, object> parameters = new Dictionary<string, object>();
            parameters.Add("@id", id);

            DataTable dt = _bd.ExecutarSelect(sql, parameters);

            if (dt.Rows.Count == 0)
                return null;
            else
            {
                User u = Map(dt.Rows[0]);

                return u;
            }

        }

        public IEnumerable<User> Search(string email)
        {
            List<User> users = new List<User>();

            string sql = @"select * 
                           from User 
                           where email = @email";

            Dictionary<string, object> parameters = new Dictionary<string, object>();
            parameters.Add("@email", email);

            DataTable dt = _bd.ExecutarSelect(sql, parameters);

            foreach (DataRow row in dt.Rows)
            {
                users.Add(Map(row));
            }

            return users;
        }

        private User Map(DataRow row)
        {
            User u = new User()
            {
                Id = Convert.ToInt32(row["id"]),
                Email = row["Email"].ToString(),
                Password = row["password"].ToString(),
            };

            return u;
        }

        public bool ValidateAuth(string email, string password)
        {
            _bd.AbrirConexao();

            string sql = @"select count(*) 
                           from User 
                           where email = @email and
                                 password = @password";

            Dictionary<string, object> parameters = new Dictionary<string, object>();
            parameters.Add("@email", email);
            parameters.Add("@password", password);

            bool ok = Convert.ToInt32(_bd.ExecutarConsultaSimples(sql, parameters)) == 1;

            _bd.FecharConexao();
            return ok;
        }
    }
}
