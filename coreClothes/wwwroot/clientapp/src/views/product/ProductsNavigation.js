import React from 'react';

class ProductsNavigation extends React.Component {
    constructor() {
        super();
    }

    render = () => {
        let view =
            <>
                <nav aria-label="Page navigation">
                    <ul className="pagination justify-content-center">
                        <li className="page-item disabled">
                            <a className="page-link page-link-prev" href="#" aria-label="Previous" tabIndex="-1" aria-disabled="true">
                                <span aria-hidden="true"><i className="icon-long-arrow-left"></i></span>Prev
                            </a>
                        </li>
                        <li className="page-item active" aria-current="page"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item-total">of 6</li>
                        <li className="page-item">
                            <a className="page-link page-link-next" href="#" aria-label="Next">
                                Next <span aria-hidden="true"><i className="icon-long-arrow-right"></i></span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </>
        return view;
    }
}

export default ProductsNavigation;

