import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import { auth } from "../firebase";

class SignUp extends Component {
  state = {
    email: "",
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
    const { email, passwordOne, passwordTwo, error } = this.state;

    const inputInvalid =
      passwordOne !== passwordTwo || email === "" || passwordOne === "";

    const signUpForm = (
      <div>
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={email}
          onChange={this.handleChange}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          name="passwordOne"
          value={passwordOne}
          onChange={this.handleChange}
        />
        <br />
        <input
          type="password"
          placeholder="Confirm Password"
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
        <p>Sign Up</p>
        {signUpForm}
        {error && <p>{error.message}</p>}
        <p>
          Already have an account? <Link to={"/signin"}>Sign In</Link>
        </p>
      </div>
    );
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    const { email, passwordOne } = this.state;
    auth
      .createNewUser(email, passwordOne)
      .then(user => {
        this.setState({
          schoolName: "",
          email: "",
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

export default SignUp;
