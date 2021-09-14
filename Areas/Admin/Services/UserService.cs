using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using coreClothes.Areas.Admin.Models;

namespace coreClothes.Areas.Admin.Services
{
    public class UserService
    {
        public Models.User GetUser(int id)
        {
            Models.User u = new Models.User();
            return u;
        }

        public bool Save(Models.User u)
        {
            bool success;
            string msg;
            (success, msg) = u.Validate();

            if (success)
            {
                return true;
            }

            return false;
        }



        public bool ValidarAutenticacao(string email, string password)
        {
            if (email == "admin@mail.com" && password == "123")
                return true;

            return false;
        }

        public bool ValidarAutenticacao(Models.User user)
        {
            if (user.Email == "admin" && user.Password == "123")
                return true;

            return false;
        }
    }
}
