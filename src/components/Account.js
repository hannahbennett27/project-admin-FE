import React from "react";
import { Link } from "react-router-dom";
import AuthUserContext from "./AuthUserContext";
import NewGame from "./NewGame";
import Header from "./Header";
import Games from "./Games";
import PolarChartComplete from "./PolarChartComplete";

const Account = () => {
  return (
    <div>
      <AuthUserContext.Consumer>
        {user => (user ? userAcc : nullUserAcc)}
      </AuthUserContext.Consumer>
    </div>
  );
};

const userAcc = (
  <div className="container-fluid bg-white">
    <div className="row">
      <div className="col-2 border-right bg-light">
        <ul className="list-unstyled">
          <li className="mb-4 mt-2">
            <h2>Account Page</h2>
          </li>
          <li className="mb-2">
            <Link to={"/changepassword"}>
              <span className="text-secondary">
                {" "}
                <i className="fas fa-user-circle" /> Update Account
              </span>
            </Link>
          </li>
          <li className="mb-2">
            <Link to={"/account/games"}>
              <span className="text-secondary">
                {" "}
                <i className="fas fa-gamepad" /> Saved games
              </span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="col-10">
        <Header />
        <div className="container">
          <div className="row mt-5">
            <div className="col-6">
              <NewGame />
            </div>
            <div className="col-6">
              <PolarChartComplete />
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <div>
            <Games />
          </div>
        </div>
      </div>
    </div>
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
