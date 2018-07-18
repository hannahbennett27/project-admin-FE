import React, { Component } from 'react';
import { dbgames } from '../firebase';
import AuthUserContext from './AuthUserContext';
import { Link } from 'react-router-dom';
import LineChart from './LineChart';
import PolarChartCulture from './PolarChartCulture';
import PolarChartComplete from './PolarChartComplete';

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
    const { players: playersData } = this.state.game;

    return this.state.game.schoolYear && this.props.user ? (
      <div className="container-fluid bg-white">
        <div className="row">
          <div className="col-2 border-right bg-light">
            <ul className="list-unstyled">
              <li className="mb-2 mt-2">{this.props.user.schoolName} </li>
              <li className="mb-2 text-secondary">
                <Link to={'/account'}>
                  <span className="text-secondary">Account Summary</span>
                </Link>
              </li>
              <li className="mb-2 ">
                <Link to={'/changepassword'}>
                  <span className="text-secondary">
                    {' '}
                    <i className="fas fa-user-circle" /> Update Account
                  </span>
                </Link>
              </li>
              <li className="mb-2 text-secondary">
                <Link to={'/account/games'}>
                  <span className="text-secondary">
                    {' '}
                    <i className="fas fa-gamepad" /> Saved games
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-10">
            <h2 className="display-2 text-center">
              {this.state.game.sessionName}
            </h2>
            {this.props.user && (
              <div>
                <div className="container">
                  <LineChart playersData={playersData} />
                </div>
                <div className="container">
                  <div className="row">
                    <PolarChartCulture playersData={playersData} />
                    <PolarChartComplete playersData={playersData} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    ) : (
      <div id="loader" />
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
