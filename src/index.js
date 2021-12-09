import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import Firebase from "./Services/firebase/firebaseConfig";
import FirebaseContext from "./Services/firebase/firebaseContext";

import "./index.scss";

const firebase = new Firebase();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <FirebaseContext.Provider value={firebase}>
        <App />
      </FirebaseContext.Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
