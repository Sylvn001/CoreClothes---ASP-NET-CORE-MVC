using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace coreClothes.Areas.Admin.Services
{
    public class ProductService
    {
        public bool Save(Models.Product product)
        {
            bool success;
            string msg;
            (success, msg) = product.Validate();

            if (success)
            {
                return true;
            }

            return false;
        }
    }
}
