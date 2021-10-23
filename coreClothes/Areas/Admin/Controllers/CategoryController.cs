using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace coreClothes.Areas.Admin.Controllers
{
    [Area("admin")]

    public class CategoryController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Create()
        {
            return View();
        }

        public IActionResult Store()
        {
            Models.Category category = new Models.Category();

            try
            {
                category.Name = Request.Form["name"];

                Services.CategoryService categoryService = new Services.CategoryService();
                if (categoryService.Save(category))
                {
                    return Redirect("/admin/Category");
                }

            }
            catch (Exception e)
            {
                ViewBag.Msg = "Error on create a new Category!! More info: " + e;
            }

            return View("~/Areas/Admin/Views/Category/Create.cshtml");
        }

    }
}
