import React from "react";
import { Link } from "react-router-dom";

const Errorpage = () => {
  return (
    <div className="card">
      <div>
        <p>404</p>
      </div>
      <div>
        <h3>Whoops something went wrong</h3>
        <Link to="/">Home</Link>
      </div>
    </div>
  );
};

export default Errorpage;
