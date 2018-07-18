import React, { Component } from 'react';
import { dbgames } from '../firebase';
import { Link } from 'react-router-dom';
import AuthUserContext from './AuthUserContext';

class Games extends Component {
  state = { games: [] };

  componentDidMount() {
    const { id } = this.props.user;
    dbgames.getAllGames(id).then(games => {
      this.setState({ games });
    });
  }

  render() {
    return this.state.games ? (
      <div>
        <h3 className="display-4 text-center mt-4">Previous Game Sessions</h3>
        <table className="table table-striped">
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
                    <Link to={`/account/games/${game.gameId}`}>
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
