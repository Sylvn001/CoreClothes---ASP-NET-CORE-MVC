import React from 'react';
import ReactDom from 'react-dom';

import SideBar from './SideBar';
import ToolBox from './ToolBox';
import ProductStore from './ProductStore';
import ProductsNavigation from './ProductsNavigation';


class ProductsList extends React.Component
{
    constructor() {
        super();

        this.state = {
          products: [1,2,3,4,5,6,7,8],
      }
    }

    render = () => {

      let view =
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-9">
                        <ToolBox />

                        <div className="products mb-3">
                            <div className="row justify-content-center">
                              {this.state.products.map((item, index) => {return(<ProductStore key={"id_" + index}/>)})}
                            </div>
                        </div>

                        <ProductsNavigation />
                    </div>
                    <SideBar />
                </div>
            </div>

        </>
      return view;
    }
}

export default ProductsList;

ReactDom.render(<ProductsList/>, document.getElementById("root"));