import React, { Component } from "react";
import { Polar } from "react-chartjs-2";
import Select from "react-select";
import "react-select/dist/react-select.css";
import * as culturePolarData from "../dataAnalysis/generateCulturePolarData";

class PolarChartCulture extends Component {
  state = {
    // choice: 'card'
    // choice: 'careerProgression'
    // choice: 'clothing'
    selectedChoice: "night"
    // choice: 'phone',
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

    let polarData = totals;

    return (
      <div>
        <Select
          className="student-select"
          name="culture-filter"
          value={this.state.selectedChoice}
          onChange={this.handleChange}
          options={choices.map(choice => {
            return { value: choice, label: choice };
          })}
        />
        <Polar data={polarData} />
      </div>
    );
  }
  handleChange = selectedChoice => {
    if (selectedChoice === null) {
      this.setState({ selectedChoice: "card" });
    } else {
      this.setState({ selectedChoice: selectedChoice.label });
    }
    // selectedOption can be null when the `x` (close) button is clicked
    if (selectedChoice) {
      console.log(`Selected: ${selectedChoice.label}`);
    }
  };
}

export default PolarChartCulture;
