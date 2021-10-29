import React from 'react';

class ProductRightDetails extends React.Component {
    constructor() {
        super();
        this.state = {
            size: "xl",
            number: 1
        }
    }

    render = () => {
        let view =
            <>
                <div className="col-md-6">
                    <div className="product-details">
                        <h1 className="product-title">Dark yellow lace cut out swing dress</h1>

                        <div className="ratings-container">
                            <div className="ratings">
                                <div className="ratings-val" style={{width: 80 + '%'}}></div>
                            </div>
                            <a className="ratings-text" href="#product-review-link" id="review-link">( 2 Reviews )</a>
                        </div>

                        <div className="product-price">
                            $84.00
                        </div>

                        <div className="product-content">
                            <p>Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing. Sed lectus. </p>
                        </div>

                        <div className="details-filter-row details-row-size">
                            <label>Color:</label>

                            <div className="product-nav product-nav-thumbs">
                                <a href="#" className="active">
                                    <img src="/lib/molla/assets/images/products/single/1-thumb.jpg" alt="product desc"/>
                                </a>
                                <a href="#">
                                    <img src="/lib/molla/assets/images/products/single/2-thumb.jpg" alt="product desc"/>
                                </a>
                            </div>
                        </div>

                        <div className="details-filter-row details-row-size">
                            <label htmlFor="size">Size:</label>
                            <div className="select-custom">
                                <select value={this.state.size} onChange={e => this.setState({size: e.target.value})} name="size" id="size" className="form-control">

                                    <option value="#">Select a size</option>
                                    <option value="s">Small</option>
                                    <option value="m">Medium</option>
                                    <option value="l">Large</option>
                                    <option value="xl">Extra Large</option>
                                </select>
                            </div>

                            <a href="#" className="size-guide"><i className="icon-th-list"></i>size guide</a>
                        </div>

                        <div className="details-filter-row details-row-size">
                            <label htmlFor="qty">Qty:</label>
                            <div className="product-details-quantity">
                                <input type="number" id="qty" className="Form-control" value={this.state.number} onChange={e => this.setState({number: e.target.value})} name="" style={{display: 'none'}}/>
                                <div className="input-group  input-spinner">
                                    <div className="input-group-prepend">
                                        <button style={{minWidth: 26 +'px'}} className="btn btn-decrement btn-spinner" type="button">
                                            <i className="icon-minus"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="product-details-action">
                            <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>

                            <div className="details-action-wrapper">
                                <a href="#" className="btn-product btn-wishlist" title="Wishlist"><span>Add to Wishlist</span></a>
                                <a href="#" className="btn-product btn-compare" title="Compare"><span>Add to Compare</span></a>
                            </div>
                        </div>

                        <div className="product-details-footer">
                            <div className="product-cat">
                                <span>Category:</span>
                                <a href="#">Women</a>,
                                <a href="#">Dresses</a>,
                                <a href="#">Yellow</a>
                            </div>

                            <div className="social-icons social-icons-sm">
                                <span className="social-label">Share:</span>
                                <a href="#" className="social-icon" title="Facebook" target="_blank"><i className="icon-facebook-f"></i></a>
                                <a href="#" className="social-icon" title="Twitter" target="_blank"><i className="icon-twitter"></i></a>
                                <a href="#" className="social-icon" title="Instagram" target="_blank"><i className="icon-instagram"></i></a>
                                <a href="#" className="social-icon" title="Pinterest" target="_blank"><i className="icon-pinterest"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        return view;
    }
}

export default ProductRightDetails;

