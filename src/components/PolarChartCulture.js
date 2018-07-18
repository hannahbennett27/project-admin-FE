import React, { Component } from 'react';
import { Polar } from 'react-chartjs-2';
import * as culturePolarData from '../dataAnalysis/generateCulturePolarData';

class PolarChartCulture extends Component {
  state = {
    choice: 'card'
    // choice: 'careerProgression'
    // choice: 'clothing'
    // choice: 'night'
    // choice: 'phone'
  };

  render() {
    const { playersData } = this.props;
    const players = Object.keys(playersData);
    // const choices = Object.keys(playersData[players[0]].decisions);
    const { choice } = this.state;

    //console.log(choices)

    const totals = culturePolarData.generateTotals(
      playersData,
      players,
      choice
    );

    return <Polar data={totals} />;
  }
}

export default PolarChartCulture;
