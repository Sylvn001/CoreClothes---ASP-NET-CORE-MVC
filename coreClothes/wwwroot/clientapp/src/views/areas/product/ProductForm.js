import React from 'react';
import ReactDom from 'react-dom';

class ProductForm extends React.Component
{
    constructor() {

        super();

        this.state = {
            msg: '',
            success: false,
            name: '',
            id: 0,
            stock: '',
            price: '',
            category: '',
            urlImg: '',
            categories: [],
        }
    }

    save = () => {
        if (this.state.name.trim() == "" || this.state.price == "" || this.state.stock == "" || this.state.category == "") {
            this.setState({
                msg: "all fields are required",
                success: false
            })
        } else {
            let data = {
                id: this.state.id+"",
                name: this.state.name,
                stock: this.state.stock + "",
                price: this.state.price + "",
                category: this.state.category + "",
                urlImg: this.state.urlImg,
            }

            HTTPClient.post("Admin/Product/Store", data)
                .then(r => r.json())
                .then(r => {
                    console.log(r)
                    if (r.success) {
                        location.href = "/admin/Product";
                    }
                    else {
                        this.setState({
                            msg: r.msg,
                            success: r.success
                        });
                        console.log(this.state.msg)
                    }
                })
                .finally(() => {
                });
        }
    }

    search = () => {

        HTTPClient.get("Admin/Category/Search?name=" + encodeURIComponent(""))
        .then(r => r.json())
        .then(r => {
            console.log(r)
            this.setState({
                categories: r
            });

       })
       .catch((e) => {
           console.log(e)
       })

    }

    checkIDAndSetProduct = () =>{
        let id = window.location.search.substring(4)
        if(id)
        {
            HTTPClient.get("Admin/Product/SearchByID?id=" + id)
            .then(r => r.json())
            .then(r => {
                console.log(r)
                this.setState({
                    id: r.id,
                    name: r.name,
                    stock: r.stock,
                    price: r.price,
                    urlImg: r.urlImg,
                    category: r.category.id,
                });
                console.log(this.state)

           })
           .catch((e) => {
               console.log(e)
           })
        }
    }

    componentDidMount() {
        this.checkIDAndSetProduct()
        this.search()
    }

    render = () => {
      let view =
        <>
            <div className="card-header">
                <h3 className="title">New Category</h3>
            </div>
            <div className="card-body">
                <form className="">
                    <div className="form-group col-4">
                            <label htmlFor ="productName">ID</label>
                            <input
                                type="text"
                                className="form-control text-white bg-dark"
                                placeholder={this.state.id}
                                disabled
                            />
                        </div>
                    <div className="form-group col-4">
                        <label htmlFor ="productName">Product Name</label>
                        <input
                            type="text"
                            className="form-control bg-dark"
                            id="productName"
                            name="name"
                            value={this.state.name}
                            onChange={e => this.setState({name: e.target.value})}
                        />
                    </div>

                    <div className="form-group col-4">
                        <label htmlFor ="productPrice">Product Price</label>
                        <input
                            type="text"
                            className="form-control bg-dark"
                            id="price"
                            name="price"
                            value={this.state.price}
                            onChange={e => this.setState({price: e.target.value})}
                        />
                    </div>

                    <div className="form-group col-4">
                        <label htmlFor ="productStock">Product Stock</label>
                        <input
                            type="text"
                            className="form-control bg-dark"
                            id="productStock"
                            name="stock"
                            placeholder="0"
                            value={this.state.stock}
                            onChange={e => this.setState({stock: e.target.value})}
                        />
                    </div>

                    <div className="form-group col-4 ">
                        <label htmlFor ="urlImg">URL IMG</label>
                        <input
                            type="text"
                            className="form-control bg-dark"
                            id="urlIMG"
                            name="urlImg"
                            placeholder=""
                            value={this.state.urlImg}
                            onChange={e => this.setState({urlImg: e.target.value})}
                        />
                    </div>

                    <div className="form-group col-4">
                        <label htmlFor ="productCategory">Select a Category</label>
                        <select
                            className="form-control bg-dark "
                            id="productCategory"
                            name="category"
                            value={this.state.category}
                            onChange={e => this.setState({category: e.target.value})}
                        >
                            {
                                this.state.categories.map(item => {
                                    return(
                                        <option value={item.id} key={"category-" + item.id}>
                                            {item.name}
                                        </option>
                                    )
                                })
                            }
                        </select>
                    </div>
                </form>
            </div>
            <div className="card-footer">
                <a className="text-white font-weight-bold" href="/admin/Product">
                    <button type="button" className="btn btn-fill btn-info">CANCEL</button>
                </a>
                <button type="button" onClick={this.save} className="btn btn-fill btn-primary">Save</button>
            </div>
        </>
      return view;
    }
}
export default ProductForm;

ReactDom.render(<ProductForm/>, document.getElementById("root"));

