import React from "react";
import { Link } from "react-router-dom";
import AuthUserContext from "./AuthUserContext";
import SignOut from "./SignOut";
import logo from "../images/credit-wise-logo-final.png";

const Navigation = () => {
  return (
    <AuthUserContext.Consumer>
      {user => (user ? userNav : nullUserNav)}
    </AuthUserContext.Consumer>
  );
};

const userNav = (
  <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light border-bottom">
    <Link to={"/"}>
      <img src={logo} alt="piggy logo" className="navbar-brand logo" />
    </Link>
    <div className="collapse navbar-collapse" id="navbarSupportedContent" />
    <ul className="navbar-nav navbar-right mt-2">
      <li className="nav-item">
        <Link className="text-secondary" to={"/account"}>
          <p>
            Account <i class="fas fa-home" />
          </p>
        </Link>
      </li>
      <ul className="navbar-nav mr-auto">
        <SignOut />
      </ul>
    </ul>
  </nav>
);

const nullUserNav = (
  <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
    <Link to={"/"}>
      <img src={logo} alt="piggy logo" className="navbar-brand logo" />
    </Link>
    <div className="collapse navbar-collapse" id="navbarSupportedContent" />
    <ul className="navbar-nav navbar-right mt-2">
      <li className="nav-item">
        <Link className="text-secondary" to={"/signin"}>
          <p>
            {" "}
            Sign In <i className="fas fa-sign-in-alt" />
          </p>
        </Link>
      </li>
      <li className="nav-item ml-2">
        <Link className="text-secondary" to={"/signup"}>
          <p>
            {" "}
            Register <i className="fas fa-user-plus" />{" "}
          </p>
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
