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
        public IActionResult Auth()
        {
            Models.User user = new Models.User();
            user.Email = Request.Form["email"];
            user.Password = Request.Form["password"];

            Services.UserService userService = new Services.UserService();
            if (userService.ValidarAutenticacao(user))
            {
                return Redirect("/admin/dashboard/");
            }
            else
            {
                ViewBag.Msg = "Invalid Credentials!";
                return View("~/Areas/Admin/Views/Login/Index.cshtml");
            }

        }

    }
}
