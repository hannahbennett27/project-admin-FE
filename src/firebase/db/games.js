import { db } from '../firebase';
import moment from 'moment';

export const createGameSession = (id, schoolYear, sessionName) => {
  return db.collection('games').add({
    schoolId: id,
    sessionName,
    schoolYear,
    created: moment().format()
  });
};

export const getAllGames = id => {
  return db
    .collection('games')
    .where('schoolId', '==', id)
    .get()
    .then(function(querySnapshot) {
      const gameArray = [];
      querySnapshot.forEach(function(doc) {
        gameArray.push({ ...doc.data(), gameId: doc.id });
      });
      return gameArray;
    });
};

export const getGamesByYear = year => {
  return db
    .collection("games")
    .where("schoolYear", "==", year)
    .get()
    .then(function(querySnapshot) {
      const gameArray = [];
      querySnapshot.forEach(function(doc) {
        gameArray.push({ ...doc.data(), schoolYear: doc.id });
      });
      return gameArray;
    });
};

export const getSingleGame = gameId => {
  return db
    .collection('games')
    .doc(gameId)
    .get()
    .then(function(doc) {
      return doc.data();
    });
};
