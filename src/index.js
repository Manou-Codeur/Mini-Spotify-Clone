import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import Firebase from "./Services/firebase/firebaseConfig";
import FirebaseContext from "./Services/firebase/firebaseContext";
import FetchError from "./Components/errorBoundaries/FetchError";

import "./index.scss";

const firebase = new Firebase();

ReactDOM.render(
  <React.StrictMode>
  <FetchError>
    <BrowserRouter>
      <FirebaseContext.Provider value={firebase}>
        <App />
      </FirebaseContext.Provider>
    </BrowserRouter>
  </FetchError>
  </React.StrictMode>,
  document.getElementById("root")
);
