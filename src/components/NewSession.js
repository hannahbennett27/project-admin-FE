import React, { Component } from "react";
// import { dbsessions } from "../firebase";
import AuthUserContext from "./AuthUserContext";

class NewSession extends Component {
  state = {
    schoolYear: "",
    error: null
  };

  render() {
    const { schoolYear, error } = this.state;

    const minYear = 3;
    const maxYear = 9;

    const inputInvalid =
      !schoolYear || schoolYear < minYear || schoolYear > maxYear;

    const newSessionForm = (
      <div>
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
          onClick={this.handleSubmit}
        >
          Start
        </button>
      </div>
    );

    return (
      <div>
        <AuthUserContext.Consumer>
          {user => (user ? console.log(user.uid) : null)}
        </AuthUserContext.Consumer>
        <p>New Session</p>
        {newSessionForm}
        {error && <p>{error.message}</p>}
      </div>
    );
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    console.log("click");
    const { schoolYear } = this.state;

    // dbsessions
    // .createGameSession(id, schoolYear)
    // .then(key => {
    // KEY
    // this.setState({
    // schoolYear: ""
    //       });
    //     })
    //     .catch(err => {
    //       this.setState({ error: err });
    //     });
  };
}

export default NewSession;
