import React from "react";
import { Link } from "react-router-dom";

const Account = ({ user }) => {
  return user ? (
    <div>
      <p>Account Page</p>
    </div>
  ) : (
    <div>
      Must be signed in to view page. <Link to={"/"}>Back</Link>
    </div>
  );
};

export default Account;
