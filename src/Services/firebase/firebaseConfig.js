import app from "firebase/app";
import "firebase/auth";
import "firebase/database";

const {
  REACT_APP_APIKEY,
  REACT_APP_AUTHDOMAIN,
  REACT_APP_PROJECTID,
  REACT_APP_STORAGEBUCKET,
  REACT_APP_MESSAGINGSENDERID,
  REACT_APP_APPID,
} = process.env;

const config = {
  apiKey: REACT_APP_APIKEY,
  authDomain: REACT_APP_AUTHDOMAIN,
  projectId: REACT_APP_PROJECTID,
  storageBucket: REACT_APP_STORAGEBUCKET,
  messagingSenderId: REACT_APP_MESSAGINGSENDERID,
  appId: REACT_APP_APPID,
};

class Firebase {
  constructor() {
    //init firebase config
    app.initializeApp(config);

    //init firebase auth method so we could use all it's functions
    this.auth = app.auth();

    //init firebase database method so we could use all it's functions
    this.db = app.database();
  }

  //auth methods
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doResetPassword = email => this.auth.sendPasswordResetEmail(email);

  doSignOut = () => this.auth.signOut();

  isUserAuthenticated = funct => this.auth.onAuthStateChanged(funct);

  //db methods
}

export default Firebase;
