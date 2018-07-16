import React from "react";
import { Link } from "react-router-dom";
import AuthUserContext from "./AuthUserContext";
import NewGame from "./NewGame";
import Header from "./Header";

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
          <li>
            <h2>Account Page</h2>
          </li>
          <li>
            <Link to={"/changepassword"}>
              <i class="fas fa-user-circle" /> Update Account
            </Link>
          </li>
          <li>
            <Link to={"/account/games"}>
              <i class="fas fa-gamepad" /> Saved games
            </Link>
          </li>
        </ul>
      </div>
      <div className="col-10">
        <Header />
        <div className="row mt-5">
          <div className="col-6">
            <NewGame />
          </div>
          <div className="col-6">
            <img src="https://i2.wp.com/reactscript.com/wp-content/uploads/2017/01/React-wrapper-for-Chart.js-2.png" />
          </div>
        </div>
        <div>
          <img src="https://i.stack.imgur.com/hRo91.png" />
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
