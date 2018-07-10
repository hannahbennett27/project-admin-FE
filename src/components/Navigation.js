import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <Link to={"/sign_up"}>Sign Up</Link>
      <Link to={"/sign_in"}>Sign In</Link>
    </div>
  );
};

export default Navigation;
