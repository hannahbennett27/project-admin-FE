import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import Select from "react-select";
import "react-select/dist/react-select.css";
import * as lineChartData from "../dataAnalysis/generateLineChartData";

class LineChart extends Component {
  state = {
    selectedStudent: "Class Average"
  };

  render() {
    const { playersData } = this.props;
    const { selectedStudent } = this.state;
    const players = Object.keys(playersData);

    const averages = lineChartData.generateAverages(playersData, players);
    const playerData = playersData[selectedStudent];

    const dataLookUp =
      selectedStudent === "Class Average" || null ? averages : playerData;

    players.unshift("Class Average");

    let lineData = {
      labels: ["Start", "", "", "", "", "Finish"],

      datasets: [
        {
          label: "Credit Rating",
          borderColor: "#00a6be",
          fill: false,
          lineTension: 0,
          data: dataLookUp.rating
        },
        {
          label: "Credit Available",
          borderColor: "#ffb52f",
          fill: false,
          lineTension: 0,
          data: dataLookUp.creditAvail
        },
        {
          label: "Cash Available",
          borderColor: "#686868",
          fill: false,
          lineTension: 0,
          data: dataLookUp.cashAvail
        }
      ]
    };

    return (
      <div className="jumbotron bg-light">
        <h1 className="text-center text-secondary">Game Progress</h1>
        <Line data={lineData} />
        <Select
          className="student-select mx-auto"
          name="student-progress-filter"
          value={this.state.selectedStudent}
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

export default LineChart;
