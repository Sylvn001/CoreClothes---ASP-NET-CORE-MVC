using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using coreClothes.Areas.Admin.Services;

namespace coreClothes.Areas.Admin.Controllers
{
    [Area("admin")]

    public class CategoryController : Controller
    {
        CategoryService _cs = new CategoryService();

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Search(string name) 
        {
            return Json(_cs.Search(name));
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
