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
          className="form-control"
          type="text"
          placeholder="Email"
          name="email"
          value={email}
          onChange={this.handleChange}
        />
        <br />
        <input
          className="form-control"
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={this.handleChange}
        />
        <p>
          Forgotten your password? <Link to={"/resetpassword"}>Reset</Link>
        </p>
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
              <i class="fas fa-user" />
              <br />
              <h5>Sign In</h5>
              {signInForm}
              {error && <p>{error.message}</p>}
              <p>
                Don't have an account? <Link to={"/signup"}>Sign Up</Link>
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
