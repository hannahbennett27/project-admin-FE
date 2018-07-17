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

    const { schoolYear } = this.state.game;

    return this.state.game.schoolYear ? (
      <div className="container-fluid bg-white">
        <div className="row">
          <div className="col-2 border-right bg-light">
            <ul className="list-unstyled">
              <li className="mb-2 mt-2">
                <h2>
                  {schoolYear}, {this.props.user.schoolName}
                </h2>
              </li>
              <li className="mb-2">
                <Link to={"/changepassword"}>
                  <i class="fas fa-user-circle" /> Update Account
                </Link>
              </li>
              <li className="mb-2">
                <Link to={"/account/games"}>
                  <i class="fas fa-gamepad" /> Saved games
                </Link>
              </li>
              <li className="mb-2">
                <Link to={"/account"}>Account Summary</Link>
              </li>
            </ul>
          </div>
          <div className="col-10">
            <Header />
            {this.props.user && <p>charts</p>}
            <div className="container">
              <img src="https://d33wubrfki0l68.cloudfront.net/cc541f9cbdd7e0c8f14c2fde762ff38c00e9d62b/fc921/images/angular/ng2-charts/chart-example.png" />
            </div>
            <div className="container">
              <div className="row">
                <div className="col-6">
                  <img src="https://i2.wp.com/reactscript.com/wp-content/uploads/2017/01/React-wrapper-for-Chart.js-2.png" />
                </div>
                <div className="col-6">
                  <img src="https://i2.wp.com/reactscript.com/wp-content/uploads/2017/01/React-wrapper-for-Chart.js-2.png" />
                </div>
              </div>
            </div>
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
