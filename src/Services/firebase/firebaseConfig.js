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

  isUserAuthenticated = funct => this.auth.onAuthStateChanged(funct);

  //db methods
  users = () => this.db.ref("/users");
  user = uid => this.db.ref(`users/${uid}`);

  addUser = ({ name, email, uid }) =>
    this.user(uid).set({
      name,
      email,
      recentAlbums: "[]",
    });

  getAlbumsIds = uid => this.db.ref(`/users/${uid}/recentAlbums`);

  addRecentAlbum = async (uid, albumId) => {
    //get curr ids and merge them with new ones then update the db
    const currList = this.getAlbumsIds(uid);
    try {
      const snap = await currList.get();
      var updates = {};
      let albumsIds = [albumId];

      if (Array.isArray(snap.val())) {
        albumsIds.push(...snap.val());
      }

      //removes duplicate
      albumsIds = [...new Set(albumsIds)];

      updates["/users/" + uid + "/recentAlbums"] = albumsIds;
      this.db.ref().update(updates);
    } catch (err) {
      return await Promise.reject(
        "There is an unexpected error, please reload the page!"
      );
    }
  };
}

export default Firebase;
