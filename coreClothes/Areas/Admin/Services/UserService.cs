using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using coreClothes.Areas.Admin.Models;
using coreClothes.Areas.Admin.DAL;


namespace coreClothes.Areas.Admin.Services
{
    public class UserService
    {
        UserDAL _uDAL = new UserDAL();

        public bool Salvar(Models.User u)
        {
            bool sucess;
            string msg;
            (sucess, msg) = u.Validate();

            if (sucess)
            {
                sucess = false;
                var UserSearched = _uDAL.Search(u.Email).FirstOrDefault();

                if (UserSearched != null && UserSearched.Id != u.Id)
                {
                    msg = "Email already exist.";
                }
                else
                {
                    sucess = _uDAL.Save(u);
                }
            }

            return sucess;
        }

        public IEnumerable<Models.User> Search(string email)
        {
            return _uDAL.Search(email);
        }


        public Models.User GetById(int id)
        {
            return _uDAL.GetById(id);
        }

        public bool ValidateAuth(Models.User user)
        {
            return _uDAL.ValidateAuth(user.Email, user.Password);
        }
    }
}
