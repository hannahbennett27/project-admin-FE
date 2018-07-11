import { db } from "../firebase";

export const createGameSession = (id, schoolYear) =>
  db
    .ref(`users/${id}`)
    .push({ schoolYear })
    .getKey();
