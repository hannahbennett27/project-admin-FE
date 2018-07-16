import React, { Component } from 'react';
import { dbgames } from '../firebase';
import AuthUserContext from './AuthUserContext';
import { Link } from 'react-router-dom';
import Header from './Header';
import GameAnalyticsCharts from './GameAnalyticsCharts';

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
    const { created, schoolYear, sessionName } = this.state.game;
    const { gameId } = this.props.match.params;

    return (
      <div>
        <Link to={'/account/games'}>Back</Link>
        <p>Hello Game Analytics</p>
        <Header />
        {this.props.user && (
          <div>
            <p>Game ID: {gameId}</p>
            <p>Game Name: {sessionName}</p>
            <p>Created: {created}</p>
            <p>Year: {schoolYear}</p>
            <GameAnalyticsCharts playersData={this.state.game.players} />
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
