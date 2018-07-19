import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import { auth } from "../firebase";

class ResetPassword extends Component {
  state = {
    email: "",
    redirect: false,
    error: null
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/signin" />;
    }
  };

  render() {
    const { email, error } = this.state;

    const inputInvalid = email === "";

    const resetPasswordForm = (
      <div>
        <input
          className="form-control"
          type="text"
          placeholder="Email"
          name="email"
          value={email}
          onChange={this.handleChange}
        />
        <br />
        <button
          className="btn btn-outline-primary btn-sm"
          type="submit"
          value="Submit"
          disabled={inputInvalid}
          onClick={this.handleSubmit}
        >
          Reset Password
        </button>
      </div>
    );

    return (
      <div className="container mt-5 ">
        <div>
          <div className="row justify-content-md-center">
            <div className="col col-lg-2" />
            <div className="col-md-auto text-center">
              {this.renderRedirect()}
              <p className="text-secondary">Reset Password</p>
              {resetPasswordForm}
              {error && <p>{error.message}</p>}
              <p>
                <Link to={"/"}>Back</Link>
              </p>
            </div>
            <div className="col col-lg-2" />
          </div>
        </div>
      </div>
    );
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    const { email } = this.state;
    auth
      .passwordReset(email)
      .then(() => {
        this.setState({
          email: "",
          redirect: true,
          error: null
        });
      })
      .catch(err => {
        this.setState({ error: err });
      });
  };
}

export default ResetPassword;
