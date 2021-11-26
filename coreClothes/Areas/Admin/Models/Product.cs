using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using coreClothes.Models;
namespace coreClothes.Areas.Admin.Models
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Stock { get; set; }
        public decimal Price { get; set; }
        public string UrlImg { get; set; }
        public Category Category { get; set; }

        public Product ()
        {
            Id = 0;
            Name = "";
            Stock = 0;
            Price = 0;
            UrlImg = "";
            Category = new Category();
        }
    }
}
