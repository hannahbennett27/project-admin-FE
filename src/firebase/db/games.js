import { db } from "../firebase";
import moment from "moment";

export const createGameSession = (id, schoolYear, sessionName) => {
  return db.collection("games").add({
    schoolId: id,
    sessionName,
    schoolYear,
    created: moment().format("MMMM Do YYYY, h:mm:ss a")
  });
};

export const getAllGames = id => {
  return db
    .collection("games")
    .where("schoolId", "==", id)
    .get()
    .then(function(querySnapshot) {
      const gameArray = [];
      querySnapshot.forEach(function(doc) {
        gameArray.push({ ...doc.data(), gameId: doc.id });
      });
      return gameArray;
    });
};

//TODO: Limit search to school's games only
//TODO: Change search to 'by student name'
export const getGamesByYear = year => {
  return (
    db
      .collection("games")
      // .where('schoolId', '==', id)
      .where("schoolYear", "==", year)
      .get()
      .then(function(querySnapshot) {
        const gameArray = [];
        querySnapshot.forEach(function(doc) {
          gameArray.push({ ...doc.data(), schoolYear: doc.id });
        });
        return gameArray;
      })
  );
};

//TODO: Limit search to school's games only - error handling
export const getSingleGame = gameId => {
  return db
    .collection("games")
    .doc(gameId)
    .get()
    .then(function(doc) {
      return doc.data();
    });
};
