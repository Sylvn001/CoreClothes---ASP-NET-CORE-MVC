import React from 'react';
import ReactDom from 'react-dom';

class CategoryList extends React.Component
{
    constructor() {

        super();

        this.state = {
            id: 0,
            name: "123",
            msg: "",
            success: false,
            searchName: "",
            categories: [],
        }
    }

    search = () => {

        HTTPClient.get("Admin/Category/Search?name=" + encodeURIComponent(this.state.searchName))
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

    render = () => {
    this.search()
      let view =
        <>
            <table className="table tablesorter " id="">
                <thead className=" text-primary">
                    <tr>
                        <th className="">
                            ID
                        </th>
                        <th className="">
                            Name
                        </th>
                        <th>
                            <i className="fas fa-cog"></i>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.categories.length == 0 && <tr><td className="text-center" colSpan="3">Empty Categories</td></tr>}
                    {
                        this.state.categories.map(item => {
                            return(
                                <tr key={"category-" + item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
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
export default CategoryList;

ReactDom.render(<CategoryList/>, document.getElementById("root"));

