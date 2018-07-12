import React, { Component } from "react";
import { dbgames } from "../firebase";
// import AuthUserContext from "./AuthUserContext";

class Games extends Component {
  state = { games: null };

  componentDidMount() {
    const id = "cvpWn7lYliSRzrFrrwMZX73g1C32";
    dbgames.getAllGames(id);
    // .then(res => {
    //   console.log(res);
    // });
  }

  render() {
    return (
      <div>
        <p>Hello Games</p>
      </div>
    );
  }
}

export default Games;
