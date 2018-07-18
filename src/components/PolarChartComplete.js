import React from "react";
import { Pie, Polar } from "react-chartjs-2";
import * as completePolarData from "../dataAnalysis/generateCompletePolarData";

const PolarChartComplete = ({ playersData }) => {
  if (playersData) {
    const players = Object.keys(playersData);
    let total = completePolarData.generateTotal(playersData, players);

    return (
      <div className="mb-4">
        <Polar data={total} />
      </div>
    );
  } else {
    let total = completePolarData.generateOverallTotal();

    return (
      <div className="mb-4 mt-5 jumbotron bg-light">
        <Pie data={total} />
      </div>
    );
  }
};

export default PolarChartComplete;
