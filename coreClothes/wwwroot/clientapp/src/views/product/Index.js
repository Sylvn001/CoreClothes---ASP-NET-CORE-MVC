import React from 'react';
import ReactDom from 'react-dom';

class LoginCard extends React.Component
{
    constructor() {

        super();

        this.state = {
            //email: "admin@mail.com",
            //password: "123",
            //msg: "",
            //error: false
        }
    }

    render = () => {
      let view =
        <>
          {this.renderForm()}
        </>
      return view;
    }
}

export default LoginCard;

ReactDom.render(<LoginCard/>, document.getElementById("root"));