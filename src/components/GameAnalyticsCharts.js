import React from 'react';
import { Line } from 'react-chartjs-2';

const GameAnalyticsCharts = ({ playersData }) => {
  return generateRatingsLine(playersData);
};

const generateRatingsLine = playersData => {
  const players = Object.keys(playersData);

  const ratingTotals = players.reduce(
    (acc, player) => {
      playersData[player].rating.forEach((el, index) => {
        acc.data[index] ? (acc.data[index] += el) : (acc.data[index] = el);
        acc.count[index] ? acc.count[index]++ : (acc.count[index] = 1);
      });
      return acc;
    },
    { data: [], count: [] }
  );

  const creditAvailTotals = players.reduce(
    (acc, player) => {
      playersData[player].creditAvail.forEach((el, index) => {
        acc.data[index] ? (acc.data[index] += el) : (acc.data[index] = el);
        acc.count[index] ? acc.count[index]++ : (acc.count[index] = 1);
      });
      return acc;
    },
    { data: [], count: [] }
  );

  const cashAvailTotals = players.reduce(
    (acc, player) => {
      playersData[player].cashAvail.forEach((el, index) => {
        acc.data[index] ? (acc.data[index] += el) : (acc.data[index] = el);
        acc.count[index] ? acc.count[index]++ : (acc.count[index] = 1);
      });
      return acc;
    },
    { data: [], count: [] }
  );

  //TODO: remove '* 100'
  const aveRating = ratingTotals.data.map((rating, index) =>
    ((rating / ratingTotals.count[index]) * 100).toFixed(0)
  );

  const aveCreditAvail = creditAvailTotals.data.map((credit, index) =>
    ((credit / creditAvailTotals.count[index]) * 100).toFixed(0)
  );

  const aveCashAvail = cashAvailTotals.data.map((cash, index) =>
    ((cash / cashAvailTotals.count[index]) * 100).toFixed(0)
  );

  let lineData = {
    labels: ['Start', 'Intro', 'Chapter One', 'Chapter Two', 'Finish'],
    datasets: [
      {
        label: 'Credit Rating',
        borderColor: 'red',
        fill: false,
        lineTension: 0,
        data: aveRating
      },
      {
        label: 'Credit Available',
        borderColor: 'blue',
        fill: false,
        lineTension: 0,
        data: aveCreditAvail
      },
      {
        label: 'Cash Available',
        borderColor: 'purple',
        fill: false,
        lineTension: 0,
        data: aveCashAvail
      }
    ]
  };

  return <Line data={lineData} />;
};

export default GameAnalyticsCharts;
