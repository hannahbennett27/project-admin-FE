import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { dbgames } from "../firebase";
import AuthUserContext from "./AuthUserContext";

class NewGame extends Component {
  state = {
    schoolYear: "",
    sessionName: "",
    gameId: "",
    error: null
  };

  renderRedirect = () => {
    if (this.state.gameId) {
      return <Redirect to={`/account/games/${this.state.gameId}`} />;
    }
  };

  render() {
    const { schoolYear, sessionName, error } = this.state;

    const minYear = 3;
    const maxYear = 9;

    const inputInvalid =
      !schoolYear || schoolYear < minYear || schoolYear > maxYear;

    return (
      <AuthUserContext.Consumer>
        {user =>
          user ? (
            <div>
              {this.renderRedirect()}
              <p>New Session</p>
              <input
                type="text"
                placeholder="Session Name"
                name="sessionName"
                value={sessionName}
                onChange={this.handleChange}
              />
              <br />
              <input
                type="number"
                min={minYear}
                max={maxYear}
                placeholder="School Year"
                name="schoolYear"
                value={schoolYear}
                onChange={this.handleChange}
              />
              <br />
              <button
                type="submit"
                value="Submit"
                disabled={inputInvalid}
                onClick={() => this.handleSubmit(user.id)}
              >
                Start
              </button>
              {error && <p>{error.message}</p>}
            </div>
          ) : null
        }
      </AuthUserContext.Consumer>
    );
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = id => {
    console.log(id);
    const { schoolYear, sessionName } = this.state;
    // dbgames
    //   .createGameSession(id, schoolYear, sessionName)
    //   .then(res => {
    //     const gameId = res._key.path.segments[1];
    //     this.setState({
    //       schoolYear: '',
    //       sessionName: '',
    //       gameId
    //     });
    //   })
    //   .catch(err => {
    //     this.setState({ error: err });
    //   });
  };
}

export default NewGame;
