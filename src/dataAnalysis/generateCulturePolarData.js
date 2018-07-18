export const generateTotals = (playersData, players, choice) => {
  // console.log(playersData);
  // console.log(players);
  // console.log(choice);

  const lookUp = {
    card: {
      data: [0, 0, 0, 0],
      labels: ['Low APR', 'Medium APR', 'High APR', 'Choice Pending'],
      dataIndex: { low: 0, med: 1, high: 2, null: 3 }
    },
    careerProgression: {
      data: [0, 0],
      labels: ['Career Progression', 'Holiday'],
      dataIndex: { true: 0, false: 1 }
    },
    clothing: {
      data: [0, 0, 0, 0],
      labels: ['Current', 'Casual', 'Smart Casual', 'Party'],
      dataIndex: {
        currentClothing: 0,
        casualClothing: 1,
        smartCasual: 2,
        partyClothing: 3
      }
    },
    night: {
      data: [0, 0, 0, 0],
      labels: ['Night In', 'Online Shopping', 'Eat Out', 'Cinema'],
      dataIndex: { nightIn: 0, onlineShopping: 1, eatOut: 2, movies: 3 }
    },
    phone: {
      data: [0, 0, 0],
      labels: ['Second Hand', 'Sim Only', 'High Contract'],
      dataIndex: { secondHand: 0, simOnly: 1, highContract: 2 }
    }
  };

  players.forEach(player => {
    const decision = playersData[player].decisions[choice];
    const lookUpRef = lookUp[choice];
    choice === 'card' || !lookUpRef.data[lookUpRef.dataIndex[decision]]
      ? ++lookUpRef.data[lookUpRef.dataIndex[decision]]
      : null;
  });

  console.log(lookUp[choice].data);

  const totals = {
    datasets: [
      {
        data: lookUp[choice].data,
        backgroundColor: ['red', 'yellow', 'blue', 'green']
      }
    ],
    labels: lookUp[choice].labels
  };

  return totals;
};
