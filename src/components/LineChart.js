import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import * as lineChartData from '../dataAnalysis/generateLineChartData';

class LineChart extends Component {
  state = {

    selectedStudent: 'Class Average'

  };

  render() {
    const { playersData } = this.props;
    const { selectedStudent } = this.state;
    const players = Object.keys(playersData);

    const averages = lineChartData.generateAverages(playersData, players);
    const playerData = playersData[selectedStudent];

    const dataLookUp =
      selectedStudent === 'Class Average' || null ? averages : playerData;

    players.unshift('Class Average');

    let lineData = {
      labels: ['Start', '', '', '', '', 'Finish'],

      datasets: [
        {
          label: 'Credit Rating',
          borderColor: 'red',
          fill: false,
          lineTension: 0,
          data: dataLookUp.rating
        },
        {
          label: 'Credit Available',
          borderColor: 'blue',
          fill: false,
          lineTension: 0,
          data: dataLookUp.creditAvail
        },
        {
          label: 'Cash Available',
          borderColor: 'purple',
          fill: false,
          lineTension: 0,
          data: dataLookUp.cashAvail
        }
      ]
    };

    return (
      <div>
        <Select
          className="student-select"
          name="student-progress-filter"
          value={this.state.selectedStudent}
          onChange={this.handleChange}
          options={players.map(player => {
            return { value: player, label: player };
          })}
        />{' '}
        <Line data={lineData} />
      </div>
    );
  }

  handleChange = selectedStudent => {
    if (selectedStudent === null) {
      this.setState({ selectedStudent: 'Class Average' });
    } else {
      this.setState({ selectedStudent: selectedStudent.label });
    }
  };
}

export default LineChart;
