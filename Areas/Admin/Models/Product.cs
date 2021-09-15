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
        public float Price { get; set; }

        public Models.Category Category { get; set; }

        public (bool, string) Validate()
        {
            bool flag = false;
            string msg = "";

            if (Name != "" && Stock != 0 && Price > 0.0 && Category != null)
                flag = true;
            else
                msg = "Error, invalid values in creation of product!";

            return (flag, msg);
        }

    }
}
