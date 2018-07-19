import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase";

const SignOut = () => {
  return (
    <Link className="text-secondary" to={"/"}>
      <p type="submit" value="Sign Out" onClick={handleSignOut}>
        Sign Out <i class="fas fa-sign-out-alt" />
      </p>{" "}
    </Link>
  );
};

const handleSignOut = () => {
  auth.signOutUser().catch(err => {
    console.log(err);
  });
};

export default SignOut;
