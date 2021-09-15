using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace coreClothes.Areas.Admin.Controllers
{
    [Area("admin")]

    public class ProductController : Controller
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
            Models.Product product = new Models.Product();
            Models.Category category = new Models.Category();

            try
            {
                product.Name = Request.Form["name"];
                product.Stock = int.Parse(Request.Form["stock"]);
                product.Price = float.Parse(Request.Form["price"]);
                category.Id = int.Parse(Request.Form["category"]);
                category.Name = "";
                product.Category = category;

                Services.ProductService productService = new Services.ProductService();
                if (productService.Save(product))
                {
                    return Redirect("/admin/Product");
                }

            }
            catch (Exception e)
            {
                ViewBag.Msg = "Error on create a new Product!! More info: " + e;
            }

            return View("~/Areas/Admin/Views/Product/Create.cshtml");

        }

    }
}
