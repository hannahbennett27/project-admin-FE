import React, { Component } from 'react';
import { dbgames } from '../firebase';
import AuthUserContext from './AuthUserContext';
import Header from './Header';

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
        <p>Hello Game Analytics</p>
        <Header />
        {this.props.user && (
          <p>
            School Year: {schoolYear}, Game: {gameId}
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
