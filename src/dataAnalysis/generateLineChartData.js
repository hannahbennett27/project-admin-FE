export const generateAverages = (playersData, players) => {
  const dataTypes = ['rating', 'creditAvail', 'cashAvail'];

  const totals = dataTypes.map(dataType => {
    return players.reduce(
      (acc, player) => {
        playersData[player][dataType].forEach((el, index) => {
          acc[dataType].data[index]
            ? (acc[dataType].data[index] += el)
            : (acc[dataType].data[index] = el);
          acc[dataType].count[index]
            ? acc[dataType].count[index]++
            : (acc[dataType].count[index] = 1);
        });
        return acc;
      },
      { [dataType]: { data: [], count: [] } }
    );
  });

  const averages = totals.reduce((acc, el) => {
    const [dataType] = Object.keys(el);
    const totalObj = el[dataType];
    acc[dataType] = totalObj.data.map((num, index) => {
      return (num / totalObj.count[index]).toFixed(0);
    });
    return acc;
  }, {});

  return averages;
};
