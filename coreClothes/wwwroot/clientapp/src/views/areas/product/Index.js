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
    // save = () => {
    //     if (this.state.email.trim() == "" || this.state.password.trim() == "") {
    //         this.setState({
    //             msg: "Email and password are required!",
    //             success: false
    //         })
    //     } else {
    //         let data = {
    //             email: this.state.email,
    //             password: this.state.password
    //         }

    //         HTTPClient.post("Admin/Login/Auth", data)
    //             .then(r => r.json())
    //             .then(r => {
    //                 console.log(r)
    //                 if (r.success) {
    //                     location.href = "Admin/Product";
    //                 }
    //                 else {
    //                     this.setState({
    //                         msg: r.msg,
    //                         success: r.success
    //                     });
    //                     console.log(this.state.msg)
    //                 }
    //             })
    //             .finally(() => {
    //             });
    //     }
    // }

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
                                    <td>
                                        <a href="#" className="mx-2"><i className="fas fa-pencil-alt"></i></a>
                                        <a href="#" className="mx-2"><i className="fas fa-trash"></i></a>
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

