using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using coreClothes.Areas.Admin.DAL;

namespace coreClothes.Areas.Admin.Services
{
    public class ProductService
    {
        ProductDAL _pDAL = new ProductDAL();

        public bool Save(Models.Product u)
        {
            bool sucess;
            string msg;
            (sucess, msg) = u.Validate();

            if (sucess)
            {
                sucess = false;
                var ProductSearched = _pDAL.Search(u.Name).FirstOrDefault();

                if (ProductSearched != null && ProductSearched.Id != u.Id)
                {
                    msg = "Name already exist.";
                }
                else
                {
                    sucess = _pDAL.Save(u);
                }
            }

            return sucess;
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
