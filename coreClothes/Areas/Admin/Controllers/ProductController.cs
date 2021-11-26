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

        public IActionResult SearchByID(int id)
        {
            return Json(_ps.GetById(id));
        }

        public IActionResult Delete(int id){
            return Json(_ps.Delete(id));
        }

        [HttpPost]
        public IActionResult Store([FromBody] System.Text.Json.JsonElement data)
        {
            string msg = "";
            bool success = false;

            Models.Product product = new Models.Product();

            try
            {
                product.Id = Int32.Parse(data.GetProperty("id").GetString());
                product.Name  = data.GetProperty("name").GetString();
                product.Stock = int.Parse(data.GetProperty("stock").GetString());
                product.Price = decimal.Parse(data.GetProperty("price").GetString());
                product.UrlImg = data.GetProperty("urlImg").GetString();
                product.Category.Id = Int32.Parse(data.GetProperty("category").GetString());
                product.Category.Name = "";
         
                Services.ProductService productService = new Services.ProductService();
                if (productService.Save(product))
                {
                    msg = "created with success!";
                    success = true;
                }
                else
                {
                    msg = "Error on create!";
                }

            }
            catch (Exception e)
            {
                msg = "Error on create a new Product!! More info: " + e;
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
