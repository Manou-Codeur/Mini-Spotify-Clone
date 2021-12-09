import { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Album from "./Views/album/album";
import Home from "./Views/home/home";
import Auth from "./Layouts/auth/auth";
import NotFound from "./Views/notFound/notFound";

import { getPopularAlbums } from "./Services/httpServices";

const App = () => {
  const [albums, setAlbums] = useState([]);
  const [recentAlbums, setRecentAlbums] = useState([]);
  const [httpErrors, setHttpErrors] = useState(null);

  useEffect(() => {
    getPopularAlbums()
      .then(data => setAlbums(data.albums.items))
      .catch(err => setHttpErrors(err));
  }, []);

  if (httpErrors) throw new Error(httpErrors);
  return (
    <>
      <Switch>
        <Route path="/album/:id" exact component={Album} />
        <Route
          path="/home"
          exact
          render={props => (
            <Home
              {...props}
              state={{
                setAlbums,
                setHttpErrors,
                albums,
                recentAlbums,
                setRecentAlbums,
              }}
            />
          )}
        />
        <Route path="/auth" component={Auth} />
        <Route path="/notFound" exact component={NotFound} />
        <Redirect from="/" exact to="/home" />
        <Redirect to="/notFound" />
      </Switch>
    </>
  );
};

export default App;
