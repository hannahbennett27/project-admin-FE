import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import { auth } from "../firebase";

class ChangePassword extends Component {
  state = {
    passwordOne: "",
    passwordTwo: "",
    redirect: false,
    error: null
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/account" />;
    }
  };

  render() {
    const { passwordOne, passwordTwo, error } = this.state;

    const inputInvalid = passwordOne !== passwordTwo || passwordOne === "";

    const changePasswordForm = (
      <div>
        <input
          className="form-control"
          type="password"
          placeholder="New Password"
          name="passwordOne"
          value={passwordOne}
          onChange={this.handleChange}
        />
        <br />
        <input
          className="form-control"
          type="password"
          placeholder="Confirm New Password"
          name="passwordTwo"
          value={passwordTwo}
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
          Submit
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
              <i class="fas fa-unlock" />
              <br />
              <h5>Change Password</h5>
              {changePasswordForm}
              {error && <p>{error.message}</p>}
              <p>
                <Link to={"/account"}>Back</Link>
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
    const { passwordOne } = this.state;
    auth
      .passwordUpdate(passwordOne)
      .then(() => {
        this.setState({
          passwordOne: "",
          passwordTwo: "",
          redirect: true
        });
      })
      .catch(err => {
        this.setState({ error: err });
      });
  };
}

export default ChangePassword;
