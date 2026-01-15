// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCkS-iK6HcubONn9eCpNfptn-HiL7eFTM",
  authDomain: "netflixgpt-1cd85.firebaseapp.com",
  projectId: "netflixgpt-1cd85",
  storageBucket: "netflixgpt-1cd85.firebasestorage.app",
  messagingSenderId: "826851035937",
  appId: "1:826851035937:web:6ef708399949b9afa38c60",
  measurementId: "G-99Q80868PV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
