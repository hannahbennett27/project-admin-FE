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
          type="password"
          placeholder="New Password"
          name="passwordOne"
          value={passwordOne}
          onChange={this.handleChange}
        />
        <br />
        <input
          type="password"
          placeholder="Confirm New Password"
          name="passwordTwo"
          value={passwordTwo}
          onChange={this.handleChange}
        />
        <br />
        <button
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
      <div>
        {this.renderRedirect()}
        <p>Change Password</p>
        {changePasswordForm}
        {error && <p>{error.message}</p>}
        <p>
          <Link to={"/"}>Back</Link>
        </p>
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
