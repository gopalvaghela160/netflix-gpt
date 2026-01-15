// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjVRaWIEiBQoFtPoGnvd0JTJ4QMe6Q6Ec",
  authDomain: "netflixgpt-a5c83.firebaseapp.com",
  projectId: "netflixgpt-a5c83",
  storageBucket: "netflixgpt-a5c83.firebasestorage.app",
  messagingSenderId: "265535711834",
  appId: "1:265535711834:web:f18fedbe8b05af03ba4663",
  measurementId: "G-Z5SSXLRX36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);