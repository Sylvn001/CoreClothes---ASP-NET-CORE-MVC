import React from 'react';

class ProductsNavigation extends React.Component {
    constructor() {
        super();

        this.state = {
            filter: "rating"
        }
    }

    render = () => {
        let view =
            <>
                <div className="toolbox">
                    <div className="toolbox-left">
                        <div className="toolbox-info">
                            Showing <span>9 of 56</span> Products
                        </div>
                    </div>

                    <div className="toolbox-right">
                        <div className="toolbox-sort">
                            <label htmlFor="sortby">Sort by:</label>
                            <div className="select-custom">
                                <select value={this.state.filter} onChange={e=> this.setState({filter: e.target.value})} name="sortby" id="sortby" className="form-control">
                                    <option value="popularity">Most Popular</option>
                                    <option value="rating">Most Rated</option>
                                    <option value="date">Date</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        return view;
    }
}

export default ProductsNavigation;

