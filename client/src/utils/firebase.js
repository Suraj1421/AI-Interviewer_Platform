
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewer-19aa5.firebaseapp.com",
  projectId: "interviewer-19aa5",
  storageBucket: "interviewer-19aa5.firebasestorage.app",
  messagingSenderId: "897838500738",
  appId: "1:897838500738:web:a5ec1ad0c097bb81ed1d9b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}