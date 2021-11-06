using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using coreClothes.Areas.Admin.DAL;

namespace coreClothes.Areas.Admin.Services
{
    public class CategoryService
    {
        CategoryDAL _cDAL = new CategoryDAL();

        public bool Save(Models.Category c)
        {
            bool sucess;
            string msg;
            (sucess, msg) = c.Validate();

            if (sucess)
            {
                sucess = false;
                var CategorySearched = _cDAL.Search(c.Name).FirstOrDefault();

                if (CategorySearched != null && CategorySearched.Id != c.Id)
                {
                    msg = "Name already exist.";
                }
                else
                {
                    sucess = _cDAL.Save(c);
                }
            }

            return sucess;
        }

        public IEnumerable<Models.Category> Search(string name)
        {
            return _cDAL.Search(name);
        }


        public Models.Category GetById(int id)
        {
            return _cDAL.GetById(id);
        }
    }
}
