import React from 'react';
import { Polar } from 'react-chartjs-2';
import * as completePolarData from '../dataAnalysis/generateCompletePolarData';

const PolarChartComplete = ({ playersData }) => {
  const players = Object.keys(playersData);

  const total = completePolarData.generateTotal(playersData, players);

  return <Polar data={total} />;
};

export default PolarChartComplete;
