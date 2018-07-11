import React from "react";
import { Link } from "react-router-dom";
import SignOut from "./SignOut";

const Navigation = ({ user }) => {
  return user ? userNav : nullUserNav;
};

const userNav = (
  <div>
    <SignOut />
  </div>
);

const nullUserNav = (
  <div>
    <Link to={"/signup"}>
      <button>Sign Up</button>
    </Link>
    <Link to={"/signin"}>
      <button>Sign In </button>
    </Link>
  </div>
);

export default Navigation;
