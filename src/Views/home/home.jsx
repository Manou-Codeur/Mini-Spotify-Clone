import { useRef, useEffect, useState, useContext } from "react";
import jwtGenerator from "jwt-decode";

import NavBar from "./navBar/navBar";
import PopularAlbums from "./popularAlbums/popularAlbums";
import Recent from "./recent/recent";
import historyContext from "../../contexts/historyContext";
import FirebaseContext from "./../../Services/firebase/firebaseContext";

import { searchAlbums, getRecentAlbums } from "./../../Services/httpServices";

import "./home.scss";

const Home = ({
  history,
  state: { albums, setAlbums, setHttpErrors, setRecentAlbums, recentAlbums },
}) => {
  const [userAuthed, setUserAuthed] = useState(null);

  const firebase = useContext(FirebaseContext);

  //check if the user is authenticated
  useEffect(() => {
    try {
      const { user_id, aud } = jwtGenerator(
        JSON.parse(localStorage.getItem("user-authed"))
      );

      if (aud !== "mini-spotify-clone") throw new Error();

      setUserAuthed(user_id);
    } catch (error) {
      setUserAuthed(null);
    }
  }, []);

  useEffect(() => {
    if (userAuthed) {
      //call firebase and get the recent ids
      firebase.getAlbumsIds(userAuthed).once("value", async snap => {
        //call the spotify api to get the list of albums
        getRecentAlbums(snap.val())
          .then(data => setRecentAlbums(data.albums))
          .catch(err => setHttpErrors(err));
      });
    }
  }, [userAuthed]);

  const searchInput = useRef();

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

  if (albums.length === 0) return <h1>Please wait...</h1>;
  return (
    <historyContext.Provider value={history}>
      <div className="home">
        <NavBar
          ref={searchInput}
          onSearch={handleOnSearch}
          userAuthed={userAuthed}
        />
        <PopularAlbums albums={albums} />
        {userAuthed && <Recent recentAlbums={recentAlbums} />}
      </div>
    </historyContext.Provider>
  );
};

export default Home;
