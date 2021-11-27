import React from 'react';

class ProductStore extends React.Component {
    constructor(props) {
        super(props);

        if (localStorage.getItem("products") != null)
            this.props.father.setState({productsCart: JSON.parse(localStorage.getItem("products"))})
    }

    addToCart = () => {
        let products = this.props.father.state.productsCart;
        let product = this.props.product;

        let i = products.findIndex(item => {
            return item.id == product.id
        });

        if (i == -1)
        {
            products.push(product);
        }
        else products[i].stock++

        this.setState({
            productsCart: products
        });

        document.getElementById("cart-count").innerText = products.length;
        localStorage.setItem("products", JSON.stringify(products));
     }

    render = () => {
        let view =
            <>
                <div className="col-6 col-md-4 col-lg-4 col-xl-3">
                    <div className="product product-7 text-center">
                        <figure className="product-media">
                            <a href="/Product/Details">
                                <img src={this.props.product.urlImg} alt="Product image" style={{height: 200, objectFit: 'fill'}}className="product-image"/>
                            </a>

                                <div className="product-action-vertical">
                                    <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                </div>

                                <div className="product-action">
                                    <a style={{cursor: 'pointer'}} onClick={ () => this.addToCart(this.props.product)}  className="btn-product btn-cart"><span>add to cart</span></a>
                                </div>
                        </figure>

                        <div className="product-body">
                            <div className="product-cat">
                                <a href="#">{this.props.product.category.name}</a>
                            </div>
                            <h3 className="product-title"><a href="/Product/Details">{this.props.product.name}</a></h3>
                            <div className="product-price">
                                ${this.props.product.price}
                            </div>
                            <div className="text-sm">
                                <span style={{opacity: "55%"}}>Stock: {this.props.product.stock}</span>
                            </div>
                            <div className="ratings-container">
                                <div className="ratings">
                                    <div className="ratings-val" style={{width: 100+'%'}}></div>
                                </div>
                                <span className="ratings-text">( 100 Reviews )</span>
                            </div>

                        </div>
                    </div>
                </div>
            </>
        return view;
    }
}

export default ProductStore;

