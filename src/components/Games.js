import React, { Component } from "react";
import { dbgames } from "../firebase";
import { Link } from "react-router-dom";
import AuthUserContext from "./AuthUserContext";
import Header from "./Header";

class Games extends Component {
  state = { games: [], filteredGames: [] };

  componentDidMount() {
    const id = this.props.user.id;
    dbgames.getAllGames(id).then(games => {
      this.setState({ games });
    });
  }

  render() {
    const gameArray = !this.state.filteredGames.length
      ? this.state.games
      : this.state.filteredGames;
    return this.state.games ? (
      <div>
        <Header />
        <button onClick={this.handleClick}>All Game Data</button>
        <select>
          <option value="0">Select year:</option>
          <option value="3" onClick={this.handleClick}>
            3
          </option>
          <option value="4" onClick={this.handleClick}>
            4
          </option>
          <option value="5" onClick={this.handleClick}>
            5
          </option>
          <option value="6" onClick={this.handleClick}>
            6
          </option>
          <option value="7" onClick={this.handleClick}>
            7
          </option>
          <option value="1" onClick={this.handleClick}>
            8
          </option>
          <option value="2" onClick={this.handleClick}>
            9
          </option>
        </select>
        {typeof gameArray[0] === "string" ? (
          <h1>{gameArray[0]}</h1>
        ) : (
          gameArray.map(game => {
            return (
              <p>
                <Link to={`/account/games/${game.gameId}`}>
                  School Year:{game.schoolYear}, Game:{game.gameId}
                </Link>
              </p>
            );
          })
        )}
      </div>
    ) : (
      <p>loading...</p>
    );
  }

  handleClick = e => {
    e.target.innerText === "All Game Data"
      ? this.showAllGameData(e)
      : this.filterGameSessions(e);
  };

  showAllGameData = e => {
    this.setState({ filteredGames: [] });
  };

  filterGameSessions = e => {
    const schoolYear = e.target.value;
    let updatedGames = this.state.games.filter(game => {
      return game.schoolYear === schoolYear;
    });
    if (updatedGames.length === 0)
      updatedGames = ["Whoops, no game data for this year"];
    this.setState({ filteredGames: updatedGames });
  };
}

export default props => {
  return (
    <AuthUserContext.Consumer>
      {user => <Games {...props} user={user} />}
    </AuthUserContext.Consumer>
  );
};
