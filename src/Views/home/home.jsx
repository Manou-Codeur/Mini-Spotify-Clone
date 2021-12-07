import "./home.scss";

import NavBar from "./../../Components/navBar/navBar";
import PopularAlbums from "./popularAlbums/popularAlbums";
import Recent from "./recent/recent";

const Home = () => {
  return (
    <div className="home">
      <NavBar />
      <PopularAlbums />
      <Recent />
    </div>
  );
};

export default Home;
