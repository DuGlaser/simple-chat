import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAlcF7n8KIzJkxs7y4oLfSiPz7MY1i4vYk",
  authDomain: "simple-chat-d.firebaseapp.com",
  databaseURL: "https://simple-chat-d.firebaseio.com",
  projectId: "simple-chat-d",
  storageBucket: "simple-chat-d.appspot.com",
  messagingSenderId: "364647579442",
  appId: "1:364647579442:web:d1bc9957ebd9ca45b2612b",
  measurementId: "G-ZDF0VWJ5X4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;
