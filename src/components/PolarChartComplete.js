import React from 'react';
import { Pie, Polar } from 'react-chartjs-2';
import * as completePolarData from '../dataAnalysis/generateCompletePolarData';

const PolarChartComplete = ({ playersData }) => {
  if (playersData) {
    const players = Object.keys(playersData);
    let total = completePolarData.generateTotal(playersData, players);

    return (
      <div className="mb-4">
        <h1>Game Completed</h1>
        <Polar data={total} />
      </div>
    );
  } else {
    let total = completePolarData.generateOverallTotal();

    return (
      <div>
        <h3 className="text-center">Completed Malarkey</h3>
        <Pie data={total} />
      </div>
    );
  }
};

export default PolarChartComplete;
