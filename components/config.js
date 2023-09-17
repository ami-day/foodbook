import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import 'firebase/compat/firestore';
import { getDatabase } from 'firebase/database'

export const firebaseConfig = {
  apiKey: "AIzaSyB1YbGfa-9NfPcZ19CPgnSWmYzisq_HDbs",
  authDomain: "foodbook-95c8c.firebaseapp.com",
  databaseURL: "https://foodbook-95c8c-default-rtdb.firebaseio.com",
  projectId: "foodbook-95c8c",
  storageBucket: "foodbook-95c8c.appspot.com",
  messagingSenderId: "797842785332",
  appId: "1:797842785332:web:cf9b37ee82860223fbf661",
  measurementId: "G-GCQNQCQG47"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = getDatabase(firebaseApp);
  const auth = firebase.auth();
  export { auth, db };