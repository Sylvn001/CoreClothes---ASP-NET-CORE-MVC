using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace coreClothes.Areas.Admin.Models
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Stock { get; set; }
        public double Price { get; set; }
        public string UrlImg { get; set; }
        public Models.Category Category { get; set; }

    }
}
