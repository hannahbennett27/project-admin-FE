import React, { Component } from "react";
import { dbgames } from "../firebase";
import AuthUserContext from "./AuthUserContext";

class GameAnalytics extends Component {
  state = {
    game: {}
  };

  componentDidMount() {
    const { gameId } = this.props.match.params;
    dbgames.getSingleGame(gameId).then(game => {
      this.setState({ game });
    });
  }

  render() {
    const { schoolId, schoolYear } = this.state.game;
    return (
      <div>
        <p>Hello Game Analytics</p>
        {this.props.user && (
          <p>
            {schoolId}, {schoolYear}, {this.props.user.schoolName}
          </p>
        )}
      </div>
    );
  }
}

export default props => {
  return (
    <AuthUserContext.Consumer>
      {user => <GameAnalytics {...props} user={user} />}
    </AuthUserContext.Consumer>
  );
};
