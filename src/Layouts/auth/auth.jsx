import { useContext } from "react";

import { Route, Switch, Redirect } from "react-router-dom";

import SignIn from "./../../Views/auth/signIn/signIn";
import SignUp from "./../../Views/auth/signUp/signUp";
import FirebaseContext from "./../../Services/firebase/firebaseContext";

import "./auth.scss";

const AuthRouter = () => {
  const firebase = useContext(FirebaseContext);

  return (
    <Switch>
      <Route
        path="/auth/signIn"
        exact
        render={props => <SignIn {...props} firebase={firebase} />}
      />
      <Route
        path="/auth/signUp"
        exact
        render={props => <SignUp {...props} firebase={firebase} />}
      />
      <Redirect from="/auth" exact to="/auth/signIn" />
      <Redirect to="/notFound" />
    </Switch>
  );
};

const Auth = () => {
  return (
    <div className="auth">
      <img src="/Spotify.svg" alt="Logo" className="auth__logo" />
      <AuthRouter />
    </div>
  );
};

export default Auth;
