import React from "react";
import { auth } from "../firebase";

const SignOut = () => {
  return (
    <button type="submit" value="Sign Out" onClick={handleSignOut}>
      Sign Out
    </button>
  );
};

const handleSignOut = () => {
  auth.signOutUser().catch(err => {
    console.log(err);
  });
};

export default SignOut;
