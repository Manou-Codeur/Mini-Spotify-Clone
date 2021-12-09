import { useRef } from "react";

import NavBar from "./navBar/navBar";
import PopularAlbums from "./popularAlbums/popularAlbums";
import Recent from "./recent/recent";
import historyContext from "../../contexts/historyContext";

import { searchAlbums } from "./../../Services/httpServices";

import "./home.scss";

const Home = ({ history, state: { albums, setAlbums, setHttpErrors } }) => {
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

  if (albums.length === 0) return <h1>wait!!!</h1>;
  return (
    <historyContext.Provider value={history}>
      <div className="home">
        <NavBar ref={searchInput} onSearch={handleOnSearch} />
        <PopularAlbums albums={albums} />
        {/* <Recent /> */}
      </div>
    </historyContext.Provider>
  );
};

export default Home;
