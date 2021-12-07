import NavBar from "./../../Components/navBar/navBar";
import Title from "./title/title";
import { ReactComponent as TimingIcon } from "../../Assets/imgs/time-icon.svg";

import "./album.scss";

const Album = () => {
  return (
    <div className="album">
      <NavBar />
      <div className="album__top-part">
        <div className="album__cover">
          <img src="/adele.jpg" alt="test" />
        </div>
        <div className="album__info">
          <span>Album</span>
          <h2>Album Name</h2>
          <div className="album__info__more">
            <div className="album__info__more__ppicture">
              <img src="/adele2.jpg" alt="test22" />
            </div>
            <span>Artist - 2018 - 15 Songs</span>
          </div>
        </div>
      </div>
      <div className="album__titles">
        <div className="album__titles-header">
          <span># TITLE</span>
          <TimingIcon fill="#a3a3a3" />
        </div>
        <div className="album__titles-containner">
          <Title on={true} />
          <Title />
          <Title />
          <Title />
        </div>
      </div>
    </div>
  );
};

export default Album;
