import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { firebase } from "../firebase";
import "./App.css";
import Navigation from "./Navigation";
import Home from "./Home";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Account from "./Account";

class App extends Component {
  state = { user: null };

  componentDidMount() {
    firebase.auth.onAuthStateChanged(user => {
      user
        ? this.setState(() => ({ user }))
        : this.setState(() => ({ user: null }));
    });
  }

  render() {
    return (
      <Router>
        <div>
          <Navigation user={this.state.user} />
          <Route
            exact
            path="/account"
            render={() => <Account user={this.state.user} />}
          />
          <Route exact path="/signup" render={() => <SignUp />} />
          <Route exact path="/signin" render={() => <SignIn />} />
          <Route exact path="/" render={() => <Home />} />
        </div>
      </Router>
    );
  }
}

export default App;
