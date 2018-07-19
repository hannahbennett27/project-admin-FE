import React, { Component } from "react";
import { Polar } from "react-chartjs-2";
import "react-select/dist/react-select.css";
import * as culturePolarData from "../dataAnalysis/generateCulturePolarData";

class PolarChartCulture extends Component {
  state = {
    selectedChoice: "card"
  };

  render() {
    const { playersData } = this.props;
    const players = Object.keys(playersData);
    const choices = Object.keys(playersData[players[0]].decisions);
    const { selectedChoice } = this.state;

    const totals = culturePolarData.generateTotals(
      playersData,
      players,
      selectedChoice
    );

    return (
      <div className="jumbotron bg-light">
        <h1>Cultural Decisions</h1>
        <Polar data={totals} />

        <div class="btn-group btn-group-toggle mt-4">
          <label class="btn btn-light">
            <input
              checked
              type="radio"
              name="options"
              id="option1"
              autocomplete="off"
              onClick={this.handleClick}
              value="card"
            />{" "}
            Card
          </label>
          <label class="btn btn-light">
            <input
              checked
              type="radio"
              name="options"
              id="option2"
              autocomplete="off"
              onClick={this.handleClick}
              value="careerProgression"
            />{" "}
            Career Progression
          </label>
          <label class="btn btn-light">
            <input
              checked
              type="radio"
              name="options"
              id="option3"
              autocomplete="off"
              onClick={this.handleClick}
              value="clothing"
            />{" "}
            Clothing
          </label>
          <label class="btn btn-light">
            <input
              checked
              type="radio"
              name="options"
              id="option4"
              autocomplete="off"
              onClick={this.handleClick}
              value="night"
            />{" "}
            Night
          </label>
          <label class="btn btn-light">
            <input
              checked
              type="radio"
              name="options"
              id="option5"
              autocomplete="off"
              onClick={this.handleClick}
              value="phone"
            />{" "}
            Phone
          </label>
        </div>
      </div>
    );
  }

  handleClick = e => {
    this.setState({ selectedChoice: e.target.value });
  };
}

export default PolarChartCulture;
