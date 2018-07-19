export const generateTotal = playersData => {
  const players = Object.keys(playersData);
  const completeData = [0, 0];

  players.forEach(player => {
    const indexLookUp = { win: 0, lose: 1 };
    const result = playersData[player].result;
    result ? ++completeData[indexLookUp[result]] : null;
  });

  const total = {
    datasets: [{ data: completeData, backgroundColor: ["#ffb52f", "#00a6be"] }],
    labels: ["Win", "Lose"]
  };

  return total;
};

export const generateOverallTotal = () => {
  const total = {
    datasets: [{ data: [10, 20], backgroundColor: ["#ffb52f", "#00a6be"] }],
    labels: ["Win", "Lose"]
  };

  return total;
};
