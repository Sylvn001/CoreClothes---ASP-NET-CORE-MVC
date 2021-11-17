import React from 'react';
import ReactDom from 'react-dom';

class ProductList extends React.Component
{
    constructor() {

        super();

        this.state = {
            msg: '',
            success: false,
            searchName: '',
            products: [],
        }
    }

    search = () => {

        HTTPClient.get("Admin/Product/Search?name=" + encodeURIComponent(this.state.searchName))
        .then(r => r.json())
        .then(r => {
            console.log(r)
            this.setState({
                products: r
            });

       })
       .catch((e) => {
           console.log(e)
       })

    }

    deleteItem = (id = 0) =>
    {
        if (window.confirm("You want delete this product?")) {
            HTTPClient.get("Admin/Product/Delete?id=" +id)
            .then(r => r.json())
            .then(r => {
                console.log(r)
                if(r == true)
                    this.search()
           })
           .catch((e) => {
               console.log(e)
           })
        }
    }

    componentDidMount() {
        this.search()
    }

    render = () => {
      let view =
        <>
            <table className="table tablesorter " id="">
                <thead className=" text-primary">
                <tr>
                        <th>
                            ID
                        </th>
                        <th >
                            Name
                        </th>
                        <th>
                            Stock
                        </th>
                        <th>
                            Price
                        </th>
                        <th>
                            Category
                        </th>
                        <th>
                            Url Img
                        </th>
                        <th>
                            <i className="fas fa-cog"></i>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.products.length == 0 && <tr><td className="text-center" colSpan="6">Empty Products</td></tr>}
                    {
                        this.state.products.map(item => {
                            return(
                                <tr key={"category-" + item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.stock}</td>
                                    <td>{item.price}</td>
                                    <td>{item.category.name}</td>
                                    <td><img class="w-25" src={item.urlImg}/></td>
                                    <td>
                                        <button href={'Product/Create?id='+item.id} className="btn btn-sm btn-warning"><i className="fas fa-pencil-alt"></i></button>
                                        <button type="button" onClick={() => this.deleteItem(item.id)} className="mx-2 btn btn-sm btn-primary"><i className="fas fa-trash"></i></button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
      return view;
    }
}
export default ProductList;

ReactDom.render(<ProductList/>, document.getElementById("root"));

