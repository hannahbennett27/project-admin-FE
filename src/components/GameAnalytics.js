import React, { Component } from "react";
import { dbgames } from "../firebase";
import AuthUserContext from "./AuthUserContext";
import { Link, Redirect } from "react-router-dom";
import LineChart from "./LineChart";
import PolarChartCulture from "./PolarChartCulture";
import PolarChartComplete from "./PolarChartComplete";

class GameAnalytics extends Component {
  state = {
    game: {},
    loaded: false,
    invalidURL: false
  };

  componentDidMount() {
    const { gameId } = this.props.match.params;
    dbgames
      .getSingleGame(gameId)
      .then(game => {
        this.setState({ game, loaded: true });
      })
      .catch(err => {
        this.props.history.push("/404");
        this.setState({
          invalidUrl: true
        });
      });
  }

  render() {
    const { players: playersData, sessionName } = this.state.game;
    const { gameId } = this.props.match.params;
    return this.state.invalidUrl ? (
      <Redirect to="/404" />
    ) : this.state.loaded && this.props.user ? (
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
                    <i className="fas fa-user-circle" /> Update Account
                  </span>
                </Link>
              </li>
              <li className="mb-2 text-secondary">
                <Link to={"/account/games"}>
                  <span className="text-secondary">
                    {" "}
                    <i className="fas fa-gamepad" /> Saved games
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-10">
            <h2 className="display-4 text-center">{sessionName}</h2>
            <h6 className="text-center">
              Please have players enter <strong>{gameId}</strong> (case
              sensitive) to log into this session{" "}
            </h6>
            {this.props.user && (
              <div>
                <div className="container">
                  <LineChart playersData={playersData} />
                </div>
                <div className="container">
                  <div className="row">
                    <div className="col-10 mt-5 mx-auto">
                      <PolarChartCulture playersData={playersData} />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-10 mt-5 mx-auto">
                      <PolarChartComplete playersData={playersData} />
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
