import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import withAuthentication from "./withAuthentication";
import "./App.css";
import Navigation from "./Navigation";
import Home from "./Home";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Account from "./Account";
import ResetPassword from "./ResetPassword";
import ChangePassword from "./ChangePassword";

const App = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <Route exact path="/account" render={() => <Account />} />
        <Route exact path="/signup" render={() => <SignUp />} />
        <Route exact path="/signin" render={() => <SignIn />} />
        <Route exact path="/resetpassword" render={() => <ResetPassword />} />
        <Route exact path="/changepassword" render={() => <ChangePassword />} />
        <Route exact path="/" render={() => <Home />} />
      </div>
    </Router>
  );
};

export default withAuthentication(App);
