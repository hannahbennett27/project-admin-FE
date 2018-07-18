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
import GameAnalytics from "./GameAnalytics";
import Games from "./Games";
import ErrorPage from "./ErrorPage";

const App = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <Route
          exact
          path="/account/games/:gameId"
          render={props => <GameAnalytics {...props} />}
        />
        <Route exact path="/account/games" render={() => <Games />} />
        <Route exact path="/account" render={() => <Account />} />
        <Route exact path="/signup" render={() => <SignUp />} />
        <Route exact path="/signin" render={() => <SignIn />} />
        <Route exact path="/resetpassword" render={() => <ResetPassword />} />
        <Route exact path="/changepassword" render={() => <ChangePassword />} />
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/404" component={ErrorPage} />
      </div>
    </Router>
  );
};

export default withAuthentication(App);
