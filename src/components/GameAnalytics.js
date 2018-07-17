import React, { Component } from "react";
import { dbgames } from "../firebase";
import AuthUserContext from "./AuthUserContext";
import { Link } from "react-router-dom";
import GameAnalyticsCharts from "./GameAnalyticsCharts";

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

    return this.state.game.schoolYear ? (
      <div className="container-fluid bg-white">
        <div className="row">
          <div className="col-2 border-right bg-light">
            <ul className="list-unstyled">
              <li className="mb-2 mt-2">{this.props.user.schoolName} </li>
              <li className="mb-2 text-secondary">
                <Link to={"/account"}>
                  <span className="text-secondary">Account Summary</span>
                </Link>
              </li>
              <li className="mb-2 ">
                <Link to={"/changepassword"}>
                  <span className="text-secondary">
                    {" "}
                    <i class="fas fa-user-circle" /> Update Account
                  </span>
                </Link>
              </li>
              <li className="mb-2 text-secondary">
                <Link to={"/account/games"}>
                  <span className="text-secondary">
                    {" "}
                    <i class="fas fa-gamepad" /> Saved games
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
                  <GameAnalyticsCharts playersData={playersData} />
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
