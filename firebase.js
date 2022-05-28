import firebase from "firebase/compat/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCB6PSK0NOvirXc9XM-6mIwWGOO2rJUHn4",
  authDomain: "rn-uber-eats-clone-63b43.firebaseapp.com",
  projectId: "rn-uber-eats-clone-63b43",
  storageBucket: "rn-uber-eats-clone-63b43.appspot.com",
  messagingSenderId: "66982330603",
  appId: "1:66982330603:web:19fe64a3ebb0b3cfce7eae",
  measurementId: "G-B0NTE45XNY",
};

firebase.app.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
export default firebase;
