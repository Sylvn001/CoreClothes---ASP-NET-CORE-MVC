import React from 'react';
import ReactDom from 'react-dom';
import LoginForm from './LoginForm';

class LoginCard extends React.Component
{
    constructor() {
        super();
        this.state = {
            name: "sss",
            password: "",
            msg: "",
            success: false
        }
    }

    save = () => {
        if (this.state.name.trim() == "" || this.state.password.trim() == "")
          {
              this.setState({
                  msg: "Dados obrigatórios",
                  sucesso: false
              })
          }
    }

    renderForm = () => {
        let view =
        <div className="row">
          <div className="col-lg-3 col-md-2"></div>
          <div className="col-lg-6 col-md-8 login-box">
              <div className="col-lg-12 login-key">
                  <i className="fa fa-key" aria-hidden="true"></i>
              </div>
              <div className="col-lg-12 login-title">
                  ADMIN PANEL
              </div>

              <div className="col-lg-12 login-form">
                  <div className="col-lg-12 login-form">
                      <LoginForm data={this} />
                  </div>
              </div>
              <div className="col-lg-3 col-md-2"></div>
          </div>
        </div>

        return view;
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