export const generateTotal = (playersData, players) => {
  const completeData = [0, 0];

  players.forEach(player => {
    const indexLookUp = { win: 0, lose: 1 };
    const result = playersData[player].result;
    result ? ++completeData[indexLookUp[result]] : null;
  });

  const total = {
    datasets: [
      {
        data: completeData,
        backgroundColor: ['red', 'yellow']
      }
    ],
    labels: ['Win', 'Lose']
  };

  return total;
};
