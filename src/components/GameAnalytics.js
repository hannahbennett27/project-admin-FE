import React, { Component } from "react";
import { dbgames } from "../firebase";

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
    const { schoolId, schoolYear } = this.state.game;
    return (
      <div>
        <p>Hello Game Analytics</p>
        <p>
          {schoolId}, {schoolYear}
        </p>
      </div>
    );
  }
}

export default GameAnalytics;
