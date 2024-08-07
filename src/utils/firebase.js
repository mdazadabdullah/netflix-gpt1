// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMe0q9bpwiqGG9t9kdZkVsaIsao0oMosg",
  authDomain: "netflixgpt-1c0a3.firebaseapp.com",
  projectId: "netflixgpt-1c0a3",
  storageBucket: "netflixgpt-1c0a3.appspot.com",
  messagingSenderId: "739276894443",
  appId: "1:739276894443:web:4a2d85184f5cb52b17ceae",
  measurementId: "G-BM3TMYWVGC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();