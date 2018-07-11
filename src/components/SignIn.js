import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import { auth } from "../firebase";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
    redirect: false,
    error: null
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/account" />;
    }
  };

  render() {
    const { email, password, error } = this.state;

    const inputInvalid = email === "" || password === "";

    const signInForm = (
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
          name="password"
          value={password}
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
        {error && <p>{error.message}</p>}
      </div>
    );

    return (
      <div>
        {this.renderRedirect()}
        <p>Sign In</p>
        {signInForm}
        <p>
          Don't have an account? <Link to={"/signup"}>Sign Up</Link>
        </p>
      </div>
    );
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    const { email, password } = this.state;
    auth
      .signInUser(email, password)
      .then(user => {
        this.setState({
          email: "",
          password: "",
          redirect: true
        });
      })
      .catch(err => {
        this.setState({ error: err });
      });
  };
}

export default SignIn;
