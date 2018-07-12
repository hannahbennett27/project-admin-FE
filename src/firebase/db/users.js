import { db } from "../firebase";

// User API

export const createUser = (id, schoolName, email) => {
  return db
    .collection("users")
    .doc(id)
    .set({
      schoolName,
      email,
      id
    });
};

export const getUserById = id => {
  return db
    .collection("users")
    .doc(id)
    .get()
    .then(function(doc) {
      return doc.data();
    });
};
