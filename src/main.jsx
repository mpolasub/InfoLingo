import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css"; 
import "./style.css";


import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCKO7BxV9ztCeyXInW6tnCrr0C_QK6AcHA",
  authDomain: "infolingo-group8.firebaseapp.com",
  databaseURL: "https://infolingo-group8-default-rtdb.firebaseio.com",
  projectId: "infolingo-group8",
  storageBucket: "infolingo-group8.appspot.com", 
  messagingSenderId: "1091886161225",
  appId: "1:1091886161225:web:200358bc8477fd299e8e98"
};

const firebaseApp = initializeApp(firebaseConfig);
export const database = getDatabase(firebaseApp); 


ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
