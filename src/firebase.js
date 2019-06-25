import firebase from 'firebase/app';
import "firebase/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDwEackre06TuCedt1hdJTm8VYm-PWC3KQ",
  authDomain: "fiteat.firebaseapp.com",
  databaseURL: "https://fiteat.firebaseio.com",
  projectId: "fiteat-1561388018824",
  storageBucket: "fiteat.appspot.com",
  messagingSenderId: "AIzaSyDwEackre06TuCedt1hdJTm8VYm"
});

export const db = firebaseApp.firestore();
