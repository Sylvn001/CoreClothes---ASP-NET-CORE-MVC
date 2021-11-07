using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using coreClothes.DAL;
using coreClothes.Models;

namespace coreClothes.Services
{
    public class CategoryService
    {
        CategoryDAL _cDAL = new CategoryDAL();
        public IEnumerable<Category> GetAll()
        {
            return _cDAL.GetAll();
        }

        public IEnumerable<Category> Search(string name)
        {
            return _cDAL.Search(name);
        }

        public Category GetById(int id)
        {
            return _cDAL.GetById(id);
        }

    }
}
