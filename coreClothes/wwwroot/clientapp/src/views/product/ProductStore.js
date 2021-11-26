import React from 'react';

class ProductStore extends React.Component {
    constructor(props) {
        super(props);
    }

    render = () => {
        let view =
            <>
                <div className="col-6 col-md-4 col-lg-4 col-xl-3">
                    <div className="product product-7 text-center">
                        <figure className="product-media">
                            <a href="/Product/Details">
                                <img src="/lib/molla/assets/images/products/product-5.jpg" alt="Product image" className="product-image"/>
                            </a>

                                <div className="product-action-vertical">
                                    <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                    <a href="#" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                    <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                </div>

                                <div className="product-action">
                                    <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                                </div>
                        </figure>

                        <div className="product-body">
                            <div className="product-cat">
                                <a href="#">Dresses</a>
                            </div>
                            <h3 className="product-title"><a href="/Product/Details">Dark yellow lace cut out swing dress</a></h3>
                            <div className="product-price">
                                $84.00
                            </div>
                            <div className="ratings-container">
                                <div className="ratings">
                                    <div className="ratings-val" style={{width: 0+'%'}}></div>
                                </div>
                                <span className="ratings-text">( 0 Reviews )</span>
                            </div>

                        </div>
                    </div>
                </div>
            </>
        return view;
    }
}

export default ProductStore;

