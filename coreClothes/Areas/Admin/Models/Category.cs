using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace coreClothes.Areas.Admin.Models
{
    public class Category
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public Category()
        {
            Id = 0;
            Name = "";
        }

        public Category (int id, string name)
        {
            Id = id;
            Name = name;
        }

        public (bool, string) Validate()
        {
            bool flag = false;
            string msg = "";

            if (Name != "")
                flag = true;
            else
                msg = "Error, the name of category is empty";

            return (flag, msg);
        }
    }
}
