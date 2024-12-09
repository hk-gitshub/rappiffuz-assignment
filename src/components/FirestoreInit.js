// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDh5RR5z0uxUW-C6hkAaWtONarVLm-7xJ4",
  authDomain: "login-page-385aa.firebaseapp.com",
  projectId: "login-page-385aa",
  storageBucket: "login-page-385aa.appspot.com",
  messagingSenderId: "352240832321",
  appId: "1:352240832321:web:0740f0e9d0da8c9091dbc0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;