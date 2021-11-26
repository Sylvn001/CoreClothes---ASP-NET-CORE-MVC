using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using coreClothes.Areas.Admin.DAL;
using coreClothes.Areas.Admin.Models;

namespace coreClothes.Areas.Admin.Services
{
    public class ProductService
    {
        ProductDAL _pDAL = new ProductDAL();

        public bool Save(Models.Product p)
        {
            var ProductSearched = _pDAL.Search(p.Name).FirstOrDefault();

            if (ProductSearched != null && ProductSearched.Id != p.Id)
                return false;

            return _pDAL.Save(p);
        }

        public IEnumerable<Models.Product> Search(string name)
        {
            return _pDAL.Search(name);
        }


        public Product GetById(int id)
        {
            return _pDAL.GetById(id);
        }

        public bool Delete(int id)
        {
            return _pDAL.Delete(id);
        }

    }
}
