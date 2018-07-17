import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import { auth, dbusers } from "../firebase";

class SignUp extends Component {
  state = {
    email: "",
    schoolName: "",
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
    const { email, schoolName, passwordOne, passwordTwo, error } = this.state;

    const inputInvalid =
      passwordOne !== passwordTwo ||
      email === "" ||
      schoolName === "" ||
      passwordOne === "";

    const signUpForm = (
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
          type="text"
          placeholder="School Name"
          name="schoolName"
          value={schoolName}
          onChange={this.handleChange}
        />
        <br />
        <input
          className="form-control"
          type="password"
          placeholder="Password"
          name="passwordOne"
          value={passwordOne}
          onChange={this.handleChange}
        />
        <br />
        <input
          className="form-control"
          type="password"
          placeholder="Confirm Password"
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
              <i className="fas fa-user" />
              <br />
              <h5>Sign Up</h5>
              {signUpForm}
              {error && <p>{error.message}</p>}
              <p>
                Already have an account? <Link to={"/signin"}>Sign In</Link>
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
    const { email, schoolName, passwordOne } = this.state;
    auth
      .createNewUser(email, passwordOne)
      .then(newUser => {
        dbusers.createUser(newUser.user.uid, schoolName, email);
      })
      .then(() => {
        this.setState({
          email: "",
          schoolName: "",
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
