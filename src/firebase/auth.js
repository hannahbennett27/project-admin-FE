import { auth } from "./firebase";

// Sign Up
export const createNewUser = (email, password) =>
  auth.createUser(email, password);

// Sign In
export const signInUser = (email, password) => auth.signIn(email, password);

// Sign Out
export const signOutUser = () => auth.signOut();

// Password Reset
export const passwordReset = email => auth.resetPassword(email);

// Password Change
export const passwordUpdate = password =>
  auth.currentUser.updatePassword(password);
