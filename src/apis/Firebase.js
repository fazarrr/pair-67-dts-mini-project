// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const apiKey = process.env.REACT_APP_FIREBASE_API_KEY;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: apiKey,
  // apiKey: "AIzaSyAZ0-lmPzDeA0D0H4wRpootxLz6Mcte2vA",
  authDomain: "fab-movie.firebaseapp.com",
  projectId: "fab-movie",
  storageBucket: "fab-movie.appspot.com",
  messagingSenderId: "71869180283",
  appId: "1:71869180283:web:508cb4acfb13e320cc75de",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
