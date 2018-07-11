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
  <div>
    <Link to={"/"}>
      <button>Home</button>
    </Link>
    <SignOut />
  </div>
);

const nullUserNav = (
  <div>
    <Link to={"/"}>
      <button>Home</button>
    </Link>
    <Link to={"/signup"}>
      <button>Sign Up</button>
    </Link>
    <Link to={"/signin"}>
      <button>Sign In</button>
    </Link>
  </div>
);

export default Navigation;
