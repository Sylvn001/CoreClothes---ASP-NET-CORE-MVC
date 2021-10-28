import React from 'react';0

class ProductStore extends React.Component {
    constructor() {
        super();
    }

    render = () => {
        let view =
            <>
                <div class="col-6 col-md-4 col-lg-4 col-xl-3">
                    <div class="product product-7 text-center">
                        <figure class="product-media">
                            <a href="~/Product/Details">
                                <img src="~/lib/molla/assets/images/products/product-5.jpg" alt="Product image" class="product-image"/>
                            </a>

                                <div class="product-action-vertical">
                                    <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                    <a href="popup/quickView.html" class="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                    <a href="#" class="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                </div>

                                <div class="product-action">
                                    <a href="#" class="btn-product btn-cart"><span>add to cart</span></a>
                                </div>
                        </figure>

                        <div class="product-body">
                            <div class="product-cat">
                                <a href="#">Dresses</a>
                            </div>
                            <h3 class="product-title"><a href="~/Product/Details">Dark yellow lace cut out swing dress</a></h3>
                            <div class="product-price">
                                $84.00
                            </div>
                            <div class="ratings-container">
                                <div class="ratings">
                                    <div class="ratings-val" style="width: 0%;"></div>
                                </div>
                                <span class="ratings-text">( 0 Reviews )</span>
                            </div>

                        </div>
                    </div>
                </div>
            </>
        return view;
    }
}

export default ProductStore;

