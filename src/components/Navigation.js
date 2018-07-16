import React from "react";
import { Link } from "react-router-dom";
import AuthUserContext from "./AuthUserContext";
import SignOut from "./SignOut";

const Navigation = () => {
  return (
    <AuthUserContext.Consumer>
      {user => (user ? userNav : nullUserNav)}
    </AuthUserContext.Consumer>
  );
};

const userNav = (
  <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
    <Link to={"/"}>
      <h1 className="navbar-brand">Home </h1>
    </Link>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to={"/account"}>
            <button className="btn btn-outline-dark">Account</button>
          </Link>
        </li>
        <SignOut />
      </ul>
    </div>
  </nav>
);

const nullUserNav = (
  <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
    <Link to={"/"}>
      <h1 className="navbar-brand">Home </h1>
    </Link>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      {" "}
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to={"/signup"}>
            <button className="btn btn-outline-dark">
              {" "}
              Register <i className="fas fa-user-plus" />{" "}
            </button>
          </Link>
        </li>
        <li className="nav-item dropdown">
          <Link to={"/signin"}>
            <button className="btn btn-outline-dark">
              {" "}
              Sign In <i className="fas fa-sign-in-alt" />
            </button>
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navigation;
