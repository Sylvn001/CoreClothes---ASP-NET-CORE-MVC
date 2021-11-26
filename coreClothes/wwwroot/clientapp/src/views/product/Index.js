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
          products: [],
      }
    }

    search = () => {

      HTTPClient.get("Admin/Product/Search?name=")
      .then(r => r.json())
      .then(r => {
          console.log(r)
          this.setState({
            products: r
          });
      })
      .catch((e) => {
         console.log(e)
      })

    }

    componentDidMount() {
      this.search()
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
                              {this.state.products.map((item, index) => {return(<ProductStore productValues={item} key={"id_" + index}/>)})}
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