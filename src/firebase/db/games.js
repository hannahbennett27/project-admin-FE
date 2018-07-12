import { db } from "../firebase";

export const createGameSession = (id, schoolYear) => {
  return db.collection("games").add({
    schoolId: id,
    schoolYear
  });
};

export const getAllGames = id => {
  console.log("func test");
  return db.collection("games").where("schoolId", "==", id);
};
