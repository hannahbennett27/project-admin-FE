import firebase from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBRPYE-lg24B1OgChIWOkwbB7yQ_bp9zkg",
  authDomain: "nc-project-game.firebaseapp.com",
  databaseURL: "https://nc-project-game.firebaseio.com",
  projectId: "nc-project-game",
  storageBucket: "nc-project-game.appspot.com",
  messagingSenderId: "1063381885620"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export { auth };
