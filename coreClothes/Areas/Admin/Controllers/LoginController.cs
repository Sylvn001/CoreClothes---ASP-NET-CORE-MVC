using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using coreClothes.Areas.Admin.Models;

namespace coreClothes.Areas.Admin.Controllers
{
 
    [Area("admin")]
    public class LoginController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Auth([FromBody] System.Text.Json.JsonElement data)
        {
            Models.User user = new Models.User();
            user.Email = data.GetProperty("email").GetString();
            user.Password = data.GetProperty("password").GetString();

            Services.UserService userService = new Services.UserService();

            string msg = "";
            bool success = false;

            if (userService.ValidateAuth(user))
            {
                success = true;
                msg = "success";
            }
            else
            {
                msg = "Invalid Credentials";
            }

            return Json(new
            {
                msg,
                success,
            });


        }

    }

}
