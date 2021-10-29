import React from 'react';

class ProductGalery extends React.Component {
    constructor() {
        super();
    }

    render = () => {
        let view =
            <>
                <div className="col-md-6">
                    <div className="product-gallery product-gallery-vertical">
                        <div className="row">
                            <figure className="product-main-image">
                                <img id="product-zoom" src="/lib/molla/assets/images/products/single/1.jpg" data-zoom-image="lib/molla/assets/images/products/single/1-big.jpg" alt="product image"/>
                                <a href="#" id="btn-product-gallery" className="btn-product-gallery">
                                    <i className="icon-arrows"></i>
                                </a>
                            </figure>

                            <div id="product-zoom-gallery" className="product-image-gallery">
                                <a className="product-gallery-item active" href="#" data-image="/lib/molla/assets/images/products/single/1.jpg" data-zoom-image="lib/molla/assets/images/products/single/1-big.jpg">
                                    <img src="/lib/molla/assets/images/products/single/1-small.jpg" alt="product side"/>
                                </a>

                                <a className="product-gallery-item" href="#" data-image="lib/molla/assets/images/products/single/2.jpg" data-zoom-image="lib/molla/assets/images/products/single/2-big.jpg">
                                    <img src="/lib/molla/assets/images/products/single/2-small.jpg" alt="product cross"/>
                                </a>

                                <a className="product-gallery-item" href="#" data-image="lib/molla/assets/images/products/single/3.jpg" data-zoom-image="lib/molla/assets/images/products/single/3-big.jpg">
                                    <img src="/lib/molla/assets/images/products/single/3-small.jpg" alt="product with model"/>
                                </a>

                                <a className="product-gallery-item" href="#" data-image="lib/molla/assets/images/products/single/4.jpg" data-zoom-image="lib/molla/assets/images/products/single/4-big.jpg">
                                    <img src="/lib/molla/assets/images/products/single/4-small.jpg" alt="product back"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        return view;
    }
}

export default ProductGalery;

