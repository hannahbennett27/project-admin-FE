import React, { Component } from "react";
import { dbgames } from "../firebase";
import { Link } from "react-router-dom";
import AuthUserContext from "./AuthUserContext";

class Games extends Component {
  state = { games: null };

  componentDidMount() {
    const id = this.props.user.id;
    dbgames.getAllGames(id).then(games => {
      this.setState({ games });
    });
  }

  render() {
    return this.state.games ? (
      <div>
        <p>Hello Games</p>
        {this.state.games.map(game => {
          return (
            <p>
              <Link to={`/account/games/${game.gameId}`}>
                {game.schoolId}, {game.schoolYear}, {game.gameId}
              </Link>
            </p>
          );
        })}
      </div>
    ) : (
      <p>loading...</p>
    );
  }
}

export default props => {
  return (
    <AuthUserContext.Consumer>
      {user => <Games {...props} user={user} />}
    </AuthUserContext.Consumer>
  );
};
