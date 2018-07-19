export const generateTotal = (playersData, players, selectedStudent) => {
  const completeData = [0, 0, 0];
  const indexLookUp = { cashSpends: 0, creditSpends: 1, billPostpones: 2 };
  const keys = Object.keys(indexLookUp);

  if (selectedStudent === "Class Average") {
    players.forEach(player => {
      keys.forEach(key => {
        completeData[indexLookUp[key]] += playersData[player][key];
      });
    });

    const total = {
      datasets: [
        {
          data: completeData,
          backgroundColor: ["#00a6be", "#ffb52f", "#686868"]
        }
      ],
      labels: ["Cash Payments", "Credit Payments", "Bill Postpones"]
    };
    return total;
  } else {
    keys.forEach(key => {
      completeData[indexLookUp[key]] += playersData[selectedStudent][key];
    });
    const total = {
      datasets: [
        {
          data: completeData,
          backgroundColor: ["#00a6be", "#ffb52f", "#686868"]
        }
      ],
      labels: ["Cash Payments", "Credit Payments", "Bill Postpones"]
    };
    return total;
  }
};
