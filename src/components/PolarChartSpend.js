import React, { Component } from "react";
import { Polar } from "react-chartjs-2";
import Select from "react-select";
import "react-select/dist/react-select.css";
import * as spendPolarData from "../dataAnalysis/generateSpendPolarData";

class PolarChartSpend extends Component {
  state = {
    selectedStudent: "Class Average"
  };

  render() {
    const { playersData } = this.props;
    const { selectedStudent } = this.state;
    const players = Object.keys(playersData);
    let total = spendPolarData.generateTotal(
      playersData,
      players,
      selectedStudent
    );

    players.unshift("Class Average");

    return (
      <div className="jumbotron bg-light">
        <h1 className="text-secondary">Payment Decisions</h1>
        <Polar data={total} />
        <Select
          className="student-select mx-auto"
          name="student-progress-filter"
          value={selectedStudent}
          onChange={this.handleChange}
          options={players.map(player => {
            return { value: player, label: player };
          })}
        />
      </div>
    );
  }

  handleChange = selectedStudent => {
    if (selectedStudent === null) {
      this.setState({ selectedStudent: "Class Average" });
    } else {
      this.setState({ selectedStudent: selectedStudent.label });
    }
  };
}

export default PolarChartSpend;
