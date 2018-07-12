import { auth } from "./firebase";

// Sign Up
export const createNewUser = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password);

// Sign In
export const signInUser = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);

// Sign Out
export const signOutUser = () => auth.signOut();

// Reset Password
export const passwordReset = email => auth.sendPasswordResetEmail(email);

// Change Password
export const passwordUpdate = password =>
  auth.currentUser.updatePassword(password);
