import { db } from '../firebase';

export const createGameSession = (id, schoolYear, sessionName) => {
  // const timestamp = snapshot.get('created_at');
  // const date = timestamp.toDate();
  return db.collection('games').add({
    schoolId: id,
    schoolYear,
    sessionName
    // created: /*Date.now()*/ date
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

export const getSingleGame = gameId => {
  return db
    .collection('games')
    .doc(gameId)
    .get()
    .then(function(doc) {
      return doc.data();
    });
};

// With this change, timestamps stored in Cloud Firestore will be read back as
// Firebase Timestamp objects instead of as system Date objects. So you will also
// need to update code expecting a Date to instead expect a Timestamp. For example:

//   // Old:
//   const date = snapshot.get('created_at');
//   // New:
//   const timestamp = snapshot.get('created_at');
//   const date = timestamp.toDate();
