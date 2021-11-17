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
            urlImg,
            categories: [],
        }
    }

    save = () => {
        if (this.state.name.trim() == "" || this.state.price.trim() == "" || this.state.stock.trim() == "" || this.state.category.trim() == "") {
            this.setState({
                msg: "all fields are required",
                success: false
            })
        } else {
            let data = {
                id: this.state.id,
                name: this.state.name,
                stock: this.state.stock,
                price: this.state.price,
                category: this.state.category,
                urlImg: this.state.urlImg,
            }

            HTTPClient.post("Admin/Product/Store", data)
                .then(r => r.json())
                .then(r => {
                    console.log(r)
                    if (r.success) {
                        location.href = "Admin/Product";
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

    componentDidMount() {
        this.search()
    }

    render = () => {
      let view =
        <>
            <form>
                <select>
                    {
                        this.state.categories.map(item => {
                            return(
                                <option key={"category-" + item.id}>
                                    {item.name}
                                </option>
                            )
                        })
                    }
                </select>
            </form>
        </>
      return view;
    }
}
export default ProductForm;

ReactDom.render(<ProductForm/>, document.getElementById("root"));

