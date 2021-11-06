using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace coreClothes.Areas.Admin.Models
{
    public class User
    {
        public int Id {get; set;}
        public string Email { get; set; }
        public string Password {get; set;}

        public (bool, string) Validate()
        {

            string msg = "";
            bool success = false;

             if (Password.Length <= 3)
            {
                msg = "Invalid password, please insert a password with min 3 characters or more";
                success = false;
            }
            else if (Email.Length > 40 )
            {
                msg = "Email Size invalid!! Please insert a email with max 40 characeters";
                success = false;
            }

            return (success, msg);
        }

    }
}