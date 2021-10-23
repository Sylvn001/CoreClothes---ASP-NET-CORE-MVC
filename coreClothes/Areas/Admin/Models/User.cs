using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace coreClothes.Areas.Admin.Models
{
    public class User
    {
        public string Name {get; set;}
        public string Email { get; set; }

        public string Password {get; set;}


        public (bool, string) Validate()
        {

            string msg = "";
            bool success = false;
            if (Name.Length > 20)
            {
                msg = "Too large name! Limit in 20 characters.";
                success = false;
            }
            else if (Password.Length > 10)
            {
                msg = "Password very long. Limit in 10 characters";
                success = false;
            }
            else if (Password.Length > 10)
            {
                msg = "Email invalid!!";
                success = false;
            }

            return (success, msg);

        }

    }
}