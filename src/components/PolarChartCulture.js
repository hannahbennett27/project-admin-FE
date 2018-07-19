import React, { Component } from "react";
import { Polar } from "react-chartjs-2";
import "react-select/dist/react-select.css";
import * as culturePolarData from "../dataAnalysis/generateCulturePolarData";

class PolarChartCulture extends Component {
  state = {
    selectedChoice: "cardDecision"
  };

  render() {
    const { playersData } = this.props;
    const players = Object.keys(playersData);
    const { selectedChoice } = this.state;

    const totals = culturePolarData.generateTotals(
      playersData,
      players,
      selectedChoice
    );

    return (
      <div className="jumbotron bg-light">
        <h1>Social Decisions</h1>
        <p className="text-center">Class Total</p>
        <Polar data={totals} />
        <div className="text-center">
          <div className="btn-group btn-group-toggle mt-4">
            <label className="btn btn-light">
              <input
                defaultChecked
                type="radio"
                name="options"
                id="option1"
                autoComplete="off"
                onClick={this.handleClick}
                value="cardDecision"
              />{' '}
              Card
            </label>
            <label className="btn btn-light">
              <input
                defaultChecked
                type="radio"
                name="options"
                id="option2"
                autoComplete="off"
                onClick={this.handleClick}
                value="careerProgressionDecision"
              />{' '}
              Career Progression
            </label>
            <label className="btn btn-light">
              <input
                defaultChecked
                type="radio"
                name="options"
                id="option3"
                autoComplete="off"
                onClick={this.handleClick}
                value="clothingDecision"
              />{' '}
              Clothing
            </label>
            <label className="btn btn-light">
              <input
                defaultChecked
                type="radio"
                name="options"
                id="option4"
                autoComplete="off"
                onClick={this.handleClick}
                value="nightDecision"
              />{' '}
              Night
            </label>
            <label className="btn btn-light">
              <input
                defaultChecked
                type="radio"
                name="options"
                id="option5"
                autoComplete="off"
                onClick={this.handleClick}
                value="phoneDecision"
              />{' '}
              Phone
            </label>
          </div>
        </div>
      </div>
    );
  }

  handleClick = e => {
    this.setState({ selectedChoice: e.target.value });
  };
}

export default PolarChartCulture;
