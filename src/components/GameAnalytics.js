import React, { Component } from "react";
import { db } from "../firebase/firebase";
import AuthUserContext from "./AuthUserContext";
import { Link } from "react-router-dom";
import LineChart from "./LineChart";
import PolarChartCulture from "./PolarChartCulture";
import PolarChartComplete from "./PolarChartComplete";
import PolarChartSpend from "./PolarChartSpend";

class GameAnalytics extends Component {
  state = {
    game: {},
    loaded: false
  };

  componentDidMount() {
    const { gameId } = this.props.match.params;
    db.collection("games")
      .doc(gameId)
      .onSnapshot(docSnapshot => {
        this.setState({ game: docSnapshot.data() });
      });
  }

  render() {
    const { players: playersData, sessionName } = this.state.game;
    const { gameId } = this.props.match.params;

    return this.props.user && playersData ? (
      <div className="container-fluid background">
        <div className="sidenav border-right bg-light">
          <ul className="list-unstyled">
            <li className="mb-2 mt-2 text-secondary">
              <h3>{this.props.user.schoolName} </h3>
            </li>
            <li className="mb-2 text-secondary">
              <Link to={"/account"}>
                <span className="text-secondary">
                  <i class="fas fa-home" />Account Summary
                </span>
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
        <h2 className="display-4 text-center brandicon">{sessionName}</h2>
        <h6 className="text-center text-secondary">
          Please ask players to enter <strong>{gameId}</strong> (case sensitive)
          to log into this session
        </h6>
        {this.props.user && (
          <div>
            <div className="container">
              <LineChart playersData={playersData} />
            </div>
            <div className="container">
              <div className="row">
                <div className="col-10 mt-5 mx-auto">
                  <PolarChartSpend playersData={playersData} />
                </div>
              </div>
              <div className="row">
                <div className="col-10 mt-5 mx-auto">
                  <PolarChartCulture playersData={playersData} />
                </div>
              </div>
              <div className="row">
                <div className="col-10 mt-5 mx-auto jumbotron bg-light">
                  <PolarChartComplete playersData={playersData} />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    ) : (
      <div id="loader" />
    );
  }

  handleClick = () => {
    console.log("hello");
    this.setState({ classAverage: true });
  };
}

export default props => {
  return (
    <AuthUserContext.Consumer>
      {user => <GameAnalytics {...props} user={user} />}
    </AuthUserContext.Consumer>
  );
};
