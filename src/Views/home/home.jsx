import "./home.scss";

import NavBar from "./../../Components/navBar/navBar";
import PopularAlbums from "./PopularAlbums/popularAlbums";

const Home = () => {
  return (
    <div className="home">
      <NavBar />
      <PopularAlbums />
      {/* 
        - Recent ?
        - Popular Album
      */}
    </div>
  );
};

export default Home;
