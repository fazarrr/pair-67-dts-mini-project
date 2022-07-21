// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const apiKey = process.env.REACT_APP_FIREBASE_API_KEY;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: apiKey,
  authDomain: "movie-app-4521e.firebaseapp.com",
  projectId: "movie-app-4521e",
  storageBucket: "movie-app-4521e.appspot.com",
  messagingSenderId: "973291506632",
  appId: "1:973291506632:web:dd6673ca13304827b34efd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
