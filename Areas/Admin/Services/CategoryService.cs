using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace coreClothes.Areas.Admin.Services
{
    public class CategoryService
    {
        public bool Save(Models.Category category)
        {
            bool success;
            string msg;
            (success, msg) = category.Validate();

            if (success)
            {
                return true;
            }

            return false;
        }
    }
}
