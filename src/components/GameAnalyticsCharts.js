import React from "react";
import { Line } from "react-chartjs-2";

const GameAnalyticsCharts = ({ playersData }) => {
  return generateRatingsLine(playersData);
};

const generateRatingsLine = playersData => {
  const players = Object.keys(playersData);

  const ratingTotals = players.reduce((acc, player) => {
    playersData[player].rating.forEach((el, index) => {
      acc[index] ? (acc[index] += el) : (acc[index] = el);
    });
    return acc;
  }, []);

  //TODO: creditSpent in database => creditAvailable
  const creditAvailTotals = players.reduce((acc, player) => {
    playersData[player].creditSpent.forEach((el, index) => {
      acc[index] ? (acc[index] += el) : (acc[index] = el);
    });
    return acc;
  }, []);

  const cashAvailTotals = players.reduce((acc, player) => {
    playersData[player].cash.forEach((el, index) => {
      acc[index] ? (acc[index] += el) : (acc[index] = el);
    });
    return acc;
  }, []);

  //TODO: remove '* 100'
  const aveRating = ratingTotals.map(rating => (rating / players.length) * 100);

  const aveCreditAvail = creditAvailTotals.map(
    credit => credit / players.length
  );

  const aveCashAvail = cashAvailTotals.map(cash => cash / players.length);

  let lineData = {
    labels: ["Start", "Intro", "Chapter One", "Chapter Two", "Finish"],
    datasets: [
      {
        label: "Credit Rating",
        borderColor: "red",
        fill: false,
        lineTension: 0,
        data: aveRating
      },
      {
        label: "Credit Available",
        borderColor: "blue",
        fill: false,
        lineTension: 0,
        data: aveCreditAvail
      },
      {
        label: "Cash Available",
        borderColor: "purple",
        fill: false,
        lineTension: 0,
        data: aveCashAvail
      }
    ]
  };

  return <Line data={lineData} />;
};

export default GameAnalyticsCharts;
