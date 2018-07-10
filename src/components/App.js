import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

class App extends Component {
  state = { user: "" };
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/sign_up" render={() => <SignUp />} />
          <Route exact path="/sign_in" render={() => <SignIn />} />
          <Route exact path="/" render={() => <Home />} />
        </div>
      </Router>
    );
  }
}

export default App;
