import { useState, useEffect, useRef } from "react";

import NavBar from "./navBar/navBar";
import PopularAlbums from "./popularAlbums/popularAlbums";
import Recent from "./recent/recent";
import historyContext from "../../contexts/historyContext";

import { getPopularAlbums, searchAlbums } from "./../../Services/httpServices";

import "./home.scss";

const Home = ({ history, onSearch, albums, searchInput }) => {
  if (albums.length === 0) return <h1>wait!!!</h1>;
  return (
    <historyContext.Provider value={history}>
      <div className="home">
        <NavBar ref={searchInput} onSearch={onSearch} />
        <PopularAlbums albums={albums} />
        {/* <Recent /> */}
      </div>
    </historyContext.Provider>
  );
};

export default Home;
