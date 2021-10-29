import React from 'react';
import ReactDom from 'react-dom';

import ProductGalery from './ProductGalery';
import ProductRightDetails from './ProductRightDetails';
import ProductDetailsTab from './ProductDetailsTab';
import YouMayAlsoLike from './YouMayAlsoLike';
class ProductDetails extends React.Component
{
    constructor() {
        super();
    }

    render = () => {

      let view =
        <>
          <div className="product-details-top">
            <div className="row">
              <ProductGalery/>
              <ProductRightDetails/>
            </div>
          </div>
          <ProductDetailsTab/>

          <YouMayAlsoLike/>
        </>
      return view;
    }
}

export default ProductDetails;

ReactDom.render(<ProductDetails/>, document.getElementById("root"));