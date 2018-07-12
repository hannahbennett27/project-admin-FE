import React, { Component } from "react";
import { dbgames } from "../firebase";
import { Link } from "react-router-dom";
// import AuthUserContext from "./AuthUserContext";

class Games extends Component {
  state = { games: null };

  componentDidMount() {
    const id = "cvpWn7lYliSRzrFrrwMZX73g1C32";
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

export default Games;
