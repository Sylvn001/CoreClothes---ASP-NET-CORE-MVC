using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using coreClothes.Areas.Admin.Models;
using coreClothes.Areas.Admin.Services;

namespace coreClothes.Areas.Admin.Controllers
{
    [Area("admin")]

    public class ProductController : Controller
    {
        ProductService _ps = new ProductService();

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Create()
        {
            return View();
        }

        public IActionResult Search(string name)
        {
            return Json(_ps.Search(name));
        }


        [HttpPost]
        public IActionResult Store([FromBody] System.Text.Json.JsonElement data)
        {
            string msg = "";
            bool success = false;

            Models.Product product = new Models.Product();
            Models.Category category = new Models.Category();

            try
            {
                string name = data.GetProperty("name").GetString();
                int stock = int.Parse(data.GetProperty("stock").GetString());
                float price = float.Parse(data.GetProperty("price").GetString());

                category.Id = int.Parse(data.GetProperty("category").GetString());
                category.Name = "";

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

            var jsonMessage = new
            {
                msg,
                success
            };

            return Json(jsonMessage);
        }
    }
}
