import React from "react";
import AuthUserContext from "./AuthUserContext";
import { firebase } from "../firebase";

const withAuthentication = Component => {
  class WithAuthentication extends React.Component {
    state = { user: null };

    componentDidMount() {
      firebase.auth.onAuthStateChanged(user => {
        user
          ? this.setState(() => ({ user }))
          : this.setState(() => ({ user: null }));
      });
    }

    render() {
      const { user } = this.state;
      return (
        <AuthUserContext.Provider value={user}>
          <Component />
        </AuthUserContext.Provider>
      );
    }
  }
  return WithAuthentication;
};

export default withAuthentication;
