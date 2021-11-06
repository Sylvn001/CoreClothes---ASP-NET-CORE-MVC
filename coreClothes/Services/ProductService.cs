using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using coreClothes.DAL;

namespace coreClothes.Services
{
    public class ProductService
    {
        ProductDAL _pDAL = new ProductDAL();
        public Models.Product GetAll()
        {
            return _pDAL.GetAll();
        }

        public IEnumerable<Models.Product> Search(string name)
        {
            return _pDAL.Search(name);
        }

        public Models.Product GetById(int id)
        {
            return _pDAL.GetById(id);
        }

    }
}
