
import React, { Component } from "react";
import { dbgames } from "../firebase";
import { Link } from "react-router-dom";
import AuthUserContext from "./AuthUserContext";


class Games extends Component {
  state = { games: [] };

  componentDidMount() {
    const { id } = this.props.user;
    dbgames.getAllGames(id).then(games => {
      this.setState({ games });
    });
  }

  //TODO: Maybe try componentDidUpdate here - /account/games not working on refresh

  render() {

    return this.state.games ? (
      <div>
        <h3 className="text-center">Previous Game Sessions</h3>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">School Year</th>
              <th scope="col">Game ID</th>
              <th scope="col">Session Date</th>
            </tr>
          </thead>
          <tbody>
            {this.state.games.map((game, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{game.schoolYear} </td>
                  <td>
                    <Link to={`/account/games/${game.gameId}`}>
                      {game.gameId}

                    </Link>
                  </td>
                  <td>01/12/18</td>
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
