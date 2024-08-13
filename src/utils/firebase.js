// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACJTFr64u_tzIWRZp2Wr5oRF8KS_NLkeE",
  authDomain: "azad-netflix-gpt.firebaseapp.com",
  projectId: "azad-netflix-gpt",
  storageBucket: "azad-netflix-gpt.appspot.com",
  messagingSenderId: "422229800510",
  appId: "1:422229800510:web:3d82e240b5285f2db3436f",
  measurementId: "G-KM94YN12CK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();