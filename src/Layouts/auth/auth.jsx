import { Route, Switch, Redirect } from "react-router-dom";

import SignIn from "./../../Views/auth/signIn/signIn";
import SignUp from "./../../Views/auth/signUp/signUp";

import "./auth.scss";

const AuthRouter = () => (
  <Switch>
    <Route path="/auth/signIn" exact component={SignIn} />
    <Route path="/auth/signUp" exact component={SignUp} />
    <Redirect from="/auth" exact to="/auth/signIn" />
    <Redirect to="/notFound" />
  </Switch>
);

const Auth = () => {
  return (
    <div className="auth">
      <img src="/Spotify.svg" alt="Logo" className="auth__logo" />
      <AuthRouter />
    </div>
  );
};

export default Auth;
