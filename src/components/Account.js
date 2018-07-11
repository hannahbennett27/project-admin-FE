import React from "react";
import { Link } from "react-router-dom";
import AuthUserContext from "./AuthUserContext";
import NewSession from "./NewSession";

const Account = () => {
  return (
    <div>
      <AuthUserContext.Consumer>
        {user => (user ? userAcc : nullUserAcc)}
      </AuthUserContext.Consumer>
      <NewSession />
    </div>
  );
};

const userAcc = (
  <div>
    <p>Account Page</p>
    <p>
      Change password <Link to={"/changepassword"}>here</Link>
    </p>
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
