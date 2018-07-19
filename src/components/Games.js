import React, { Component } from "react";
import { dbgames } from "../firebase";
import { Link, Redirect } from "react-router-dom";
import AuthUserContext from "./AuthUserContext";

class Games extends Component {
  state = {
    games: [],
    loaded: false,
    invalidURL: false
  };

  componentDidMount() {
    const { id } = this.props.user;
    dbgames
      .getAllGames(id)
      .then(games => {
        this.setState({ games, loaded: true });
      })
      .catch(err => {
        this.props.history.push("/404");
        this.setState({
          invalidUrl: true
        });
      });
  }

  render() {
    return this.state.invalidUrl ? (
      <Redirect to="/404" />
    ) : this.state.loaded && this.state.games ? (
      <div>
        <h2 className=" text-center mt-4 text-secondary">
          Previous Game Sessions
        </h2>
        <table className="table table-striped text-secondary">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Session Name</th>
              <th scope="col">School Year</th>
              <th scope="col">Game ID</th>
              <th scope="col">Session Date</th>
            </tr>
          </thead>
          <tbody>
            {this.state.games.map((game, index) => {
              return (
                <tr key={game.gameId}>
                  <td>{index + 1}</td>
                  <td>{game.sessionName}</td>
                  <td>{game.schoolYear} </td>
                  <td>
                    <Link
                      className="text-secondary"
                      to={`/account/games/${game.gameId}`}
                    >
                      {game.gameId}
                    </Link>
                  </td>
                  <td>{game.created}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    ) : (
      <div id="loader" />
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
