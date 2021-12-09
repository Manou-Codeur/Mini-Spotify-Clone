import { useState, useEffect, useRef } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Album from "./Views/album/album";
import Home from "./Views/home/home";
import Auth from "./Layouts/auth/auth";
import NotFound from "./Views/notFound/notFound";

import { getPopularAlbums, searchAlbums } from "./Services/httpServices";

const App = () => {
  const [albums, setAlbums] = useState([]);
  const [httpErrors, setHttpErrors] = useState(null);

  const searchInput = useRef();

  useEffect(() => {
    getPopularAlbums()
      .then(data => setAlbums(data.albums.items))
      .catch(err => setHttpErrors(err));
  }, []);

  const handleOnSearch = async e => {
    if (e.keyCode === 13) {
      try {
        const { items } = await searchAlbums(searchInput.current.value);
        setAlbums(items);
        searchInput.current.value = "";
      } catch (error) {
        setHttpErrors(error);
      }
    }
  };

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
              onSearch={handleOnSearch}
              albums={albums}
              searchInput={searchInput}
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
