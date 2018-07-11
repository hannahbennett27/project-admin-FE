import { db } from "../firebase";

// User API

export const createUser = (id, schoolName, email) =>
  db.ref(`users/${id}`).set({
    schoolName,
    email
  });
