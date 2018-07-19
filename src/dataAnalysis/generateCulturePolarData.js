export const generateTotals = (playersData, players, choice) => {
  const lookUp = {
    cardDecision: {
      data: [0, 0, 0, 0],
      labels: ["Low APR", "Medium APR", "High APR", "Choice Pending"],
      dataIndex: { low: 0, med: 1, high: 2, null: 3 }
    },
    careerProgressionDecision: {
      data: [0, 0],
      labels: ["Career Progression", "Holiday"],
      dataIndex: { true: 0, false: 1 }
    },
    clothingDecision: {
      data: [0, 0, 0, 0],
      labels: ["Current", "Casual", "Smart Casual", "Party"],
      dataIndex: {
        currentClothing: 0,
        casualClothing: 1,
        smartCasual: 2,
        partyClothing: 3
      }
    },
    nightDecision: {
      data: [0, 0, 0, 0],
      labels: ["Night In", "Online Shopping", "Eat Out", "Cinema"],
      dataIndex: { nightIn: 0, onlineShopping: 1, eatOut: 2, movies: 3 }
    },
    phoneDecision: {
      data: [0, 0, 0],
      labels: ["Second Hand", "Sim Only", "High Contract"],
      dataIndex: { secondHand: 0, simOnly: 1, highContract: 2 }
    }
  };

  players.forEach(player => {
    const decision = playersData[player][choice];
    const lookUpRef = lookUp[choice];
    choice === "cardDecision" || !lookUpRef.data[lookUpRef.dataIndex[decision]]
      ? ++lookUpRef.data[lookUpRef.dataIndex[decision]]
      : null;
  });

  const totals = {
    datasets: [
      {
        data: lookUp[choice].data,
        backgroundColor: ["#00a6be", "#ffb52f", "#686868", "#42bb16"]
      }
    ],
    labels: lookUp[choice].labels
  };

  return totals;
};
