import React from "react";
import { Link } from "react-router-dom";
import AuthUserContext from "./AuthUserContext";

const Account = () => {
  return (
    <AuthUserContext.Consumer>
      {user => (user ? userAcc : nullUserAcc)}
    </AuthUserContext.Consumer>
  );
};

const userAcc = (
  <div>
    <p>Account Page</p>
  </div>
);

const nullUserAcc = (
  <div>
    <p>
      Must be signed in to view page. <Link to={"/"}>Back</Link>
    </p>
  </div>
);

export default Account;
