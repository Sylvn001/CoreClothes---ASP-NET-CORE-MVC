import React from 'react';

class LoginForm extends React.Component
{
    constructor(props) {
        super(props);
    }

    render = (props) => {
        let msg = null;

        if (!this.props.data.state.success)
        {
            msg =
            <div className="alert alert-danger">
                <button type="button" aria-hidden="true" className="close" data-dismiss="alert" aria-label="Close">
                    <i className="tim-icons icon-simple-remove"></i>
                </button>
                <span>
                    <b>Error -</b>
                    {this.data.state.msg}
                </span>
            </div>
        }

        let view =
            <React.Fragment>
                    <form action="~/admin/Login/Auth" method="post">
                        <div className="form-group">
                            <label className="form-control-label">Email</label>
                            <input type="email" name="email" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label className="form-control-label">Password</label>
                            <input type="password" name="password" className="form-control"/>
                        </div>

                        <div className="col-lg-12 loginbttm">
                            <div className="col-lg-6 login-btm login-text">
                                {msg}
                            </div>
                            <div className="col-lg-6 login-btm login-button">
                                <button type="button" onClick={this.props.data.save} className="btn btn-outline-primary">LOGIN</button>
                            </div>
                        </div>
                    </form>
            </React.Fragment>
        return(view);
    }
}

export default LoginForm;
