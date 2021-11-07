using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace coreClothes.Models
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
        public Category(int id, string name)
        {
            Id = id;
            Name = Name;
        }

    }
}
