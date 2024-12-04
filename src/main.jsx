import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css"; 
import "./style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { BrowserRouter } from "react-router-dom";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKO7BxV9ztCeyXInW6tnCrr0C_QK6AcHA",
  authDomain: "infolingo-group8.firebaseapp.com",
  databaseURL: "https://infolingo-group8-default-rtdb.firebaseio.com",
  projectId: "infolingo-group8",
  storageBucket: "infolingo-group8.appspot.com", // Corrected `storageBucket` URL
  messagingSenderId: "1091886161225",
  appId: "1:1091886161225:web:200358bc8477fd299e8e98"
};

// Initialize Firebase and Realtime Database
const firebaseApp = initializeApp(firebaseConfig);
export const database = getDatabase(firebaseApp); // Export database for use in other components

ReactDOM.createRoot(document.getElementById("App")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
