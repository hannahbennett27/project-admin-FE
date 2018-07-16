
import React, { Component } from "react";
import { dbgames } from "../firebase";
import AuthUserContext from "./AuthUserContext";
import { Link } from "react-router-dom";
import Header from "./Header";

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
    const { schoolYear } = this.state.game;
    const { gameId } = this.props.match.params;
    return (
      <div>
        <Link to={"/account/games"}>Back</Link>
        <p>Hello Game Analytics</p>
        <Header />
        {this.props.user && (
          <div>
            <p>Game id: {gameId}</p>
            <p>School: {this.props.user.schoolName}</p>
            <p>Year: {schoolYear}</p>
          </div>
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
