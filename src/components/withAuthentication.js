import React from "react";
import AuthUserContext from "./AuthUserContext";
import { firebase } from "../firebase";
import { dbusers } from "../firebase";

const withAuthentication = Component => {
  class WithAuthentication extends React.Component {
    state = { user: null };

    componentDidMount() {
      firebase.auth.onAuthStateChanged(user => {
        user
          ? dbusers.getUserById(user.uid).then(user => {
              this.setState({ user });
            })
          : this.setState({ user: null });
      });
    }

    render() {
      const { user } = this.state;
      return (
        <AuthUserContext.Provider value={user}>
          <Component user={this.state.user} />
        </AuthUserContext.Provider>
      );
    }
  }
  return WithAuthentication;
};

export default withAuthentication;
