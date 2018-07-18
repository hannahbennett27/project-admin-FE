import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import * as lineChartData from '../dataAnalysis/generateLineChartData';

class GameAnalyticsLineChart extends Component {
  state = {
    select: 'All'
    // select: 'Paddy'
  };

  render() {
    const { playersData } = this.props;
    const { select } = this.state;
    const players = Object.keys(playersData);

    const averages = lineChartData.generateAverages(playersData, players);
    const playerData = playersData[select];

    const dataLookUp = select === 'All' ? averages : playerData;

    let lineData = {
      labels: [
        'Start',
        'Intro',
        'Chapter One',
        'Chapter Two',
        'Chapter Three',
        'Finish'
      ],
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

    return <Line data={lineData} />;
  }
}

export default GameAnalyticsLineChart;
