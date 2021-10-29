import React from 'react';

class YouMayAlsoLike extends React.Component {
    constructor() {
        super();


    }

    render = () => {
        let view =
            <>
                <h2 className="title text-center mb-4">You May Also Like</h2>
                <div className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow owl-loaded owl-drag" data-toggle="owl" data-owl-options="{
                                &quot;nav&quot;: false,
                                &quot;dots&quot;: true,
                                &quot;margin&quot;: 20,
                                &quot;loop&quot;: false,
                                &quot;responsive&quot;: {
                                    &quot;0&quot;: {
                                        &quot;items&quot;:1
                                    },
                                    &quot;480&quot;: {
                                        &quot;items&quot;:2
                                    },
                                    &quot;768&quot;: {
                                        &quot;items&quot;:3
                                    },
                                    &quot;992&quot;: {
                                        &quot;items&quot;:4
                                    },
                                    &quot;1200&quot;: {
                                        &quot;items&quot;:4,
                                        &quot;nav&quot;: true,
                                        &quot;dots&quot;: false
                                    }
                                }
                            }">

                    <div className="owl-stage-outer">
                        <div className="owl-stage" style={{transform: "translate3d(0px, 0px, 0px)"}, {transition: "all 0s ease 0s"} ,{width: "1485px"}}>
                            <div className="owl-item active" style={{width: "277px"}, {marginRight: "20px"}}>
                                <div className="product product-7 text-center">
                                    <figure className="product-media">
                                        <span className="product-label label-new">New</span>
                                        <a href="product.html">
                                            <img src="/lib/molla/assets/images/products/product-4.jpg" alt="Product image" className="product-image"/>
                                        </a>

                                        <div className="product-action-vertical">
                                            <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                            <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                            <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                        </div>

                                        <div className="product-action">
                                            <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                                        </div>
                                    </figure>

                                    <div className="product-body">
                                        <div className="product-cat">
                                            <a href="#">Women</a>
                                        </div>
                                        <h3 className="product-title"><a href="product.html">Brown paperbag waist <br/>pencil skirt</a></h3>
                                        <div className="product-price">
                                            $60.00
                                        </div>
                                        <div className="ratings-container">
                                            <div className="ratings">
                                                <div className="ratings-val" style={{width: "20%"}}></div>
                                            </div>
                                            <span className="ratings-text">( 2 Reviews )</span>
                                        </div>

                                    </div>
                                </div>
                            </div><div className="owl-item active" style={{width: "277px"}, {marginRight: "20px"}}>
                                <div className="product product-7 text-center">
                                    <figure className="product-media">
                                        <span className="product-label label-out">Out of Stock</span>
                                        <a href="product.html">
                                            <img src="/lib/molla/assets/images/products/product-6.jpg" alt="Product image" className="product-image"/>
                                        </a>

                                        <div className="product-action-vertical">
                                            <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                            <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                            <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                        </div>

                                        <div className="product-action">
                                            <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                                        </div>
                                    </figure>

                                    <div className="product-body">
                                        <div className="product-cat">
                                            <a href="#">Jackets</a>
                                        </div>
                                        <h3 className="product-title"><a href="product.html">Khaki utility boiler jumpsuit</a></h3>
                                        <div className="product-price">
                                            <span className="out-price">$120.00</span>
                                        </div>
                                        <div className="ratings-container">
                                            <div className="ratings">
                                                <div className="ratings-val" style={{width: "80%"}}></div>
                                            </div>
                                            <span className="ratings-text">( 6 Reviews )</span>
                                        </div>
                                    </div>
                                </div>
                            </div><div className="owl-item active" style={{width: "277px"}, {marginRight: "20px"}}>
                                <div className="product product-7 text-center">
                                    <figure className="product-media">
                                        <span className="product-label label-top">Top</span>
                                        <a href="product.html">
                                            <img src="/lib/molla/assets/images/products/product-11.jpg" alt="Product image" className="product-image"/>
                                        </a>

                                        <div className="product-action-vertical">
                                            <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                            <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                            <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                        </div>

                                        <div className="product-action">
                                            <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                                        </div>
                                    </figure>

                                    <div className="product-body">
                                        <div className="product-cat">
                                            <a href="#">Shoes</a>
                                        </div>
                                        <h3 className="product-title"><a href="product.html">Light brown studded Wide fit wedges</a></h3>
                                        <div className="product-price">
                                            $110.00
                                        </div>
                                        <div className="ratings-container">
                                            <div className="ratings">
                                                <div className="ratings-val" style={{width: '80%'}}></div>
                                            </div>
                                            <span className="ratings-text">( 1 Reviews )</span>
                                        </div>


                                    </div>
                                </div>
                            </div><div className="owl-item active" style={{width: "277px"}, {marginRight: "20px"}}>
                                <div className="product product-7 text-center">
                                    <figure className="product-media">
                                        <a href="product.html">
                                            <img src="/lib/molla/assets/images/products/product-10.jpg" alt="Product image" className="product-image"/>
                                        </a>

                                        <div className="product-action-vertical">
                                            <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                            <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                            <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                        </div>

                                        <div className="product-action">
                                            <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                                        </div>
                                    </figure>

                                    <div className="product-body">
                                        <div className="product-cat">
                                            <a href="#">Jumpers</a>
                                        </div>
                                        <h3 className="product-title"><a href="product.html">Yellow button front tea top</a></h3>
                                        <div className="product-price">
                                            $56.00
                                        </div>
                                        <div className="ratings-container">
                                            <div className="ratings">
                                                <div className="ratings-val" style={{width: "0%"}}></div>
                                            </div>
                                            <span className="ratings-text">( 0 Reviews )</span>
                                        </div>
                                    </div>
                                </div>
                            </div><div className="owl-item" style={{width: "277px"}, {marginRight: "20px"}}>
                                <div className="product product-7 text-center">
                                    <figure className="product-media">
                                        <a href="product.html">
                                            <img src="/lib/molla/assets/images/products/product-7.jpg" alt="Product image" className="product-image"/>
                                        </a>

                                        <div className="product-action-vertical">
                                            <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                            <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                            <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                        </div>

                                        <div className="product-action">
                                            <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                                        </div>
                                    </figure>

                                    <div className="product-body">
                                        <div className="product-cat">
                                            <a href="#">Jeans</a>
                                        </div>
                                        <h3 className="product-title"><a href="product.html">Blue utility pinafore denim dress</a></h3>
                                        <div className="product-price">
                                            $76.00
                                        </div>
                                        <div className="ratings-container">
                                            <div className="ratings">
                                                <div className="ratings-val" style={{width: 20 + '%'}}></div>
                                            </div>
                                            <span className="ratings-text">( 2 Reviews )</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div><div className="owl-nav"><button type="button" role="presentation" className="owl-prev disabled"><i className="icon-angle-left"></i></button><button type="button" role="presentation" className="owl-next"><i className="icon-angle-right"></i></button></div><div className="owl-dots disabled"></div>
                </div>
            </>
        return view;
    }
}

export default YouMayAlsoLike;

