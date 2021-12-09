import { useState, useEffect, useContext } from "react";
import jwtGenerator from "jwt-decode";

import Title from "./title/title";
import { ReactComponent as TimingIcon } from "../../Assets/imgs/time-icon.svg";
import FirebaseContext from "./../../Services/firebase/firebaseContext";

import { getAlbum } from "../../Services/httpServices";
import {
  formatAlbumReleaseDate,
  formatAlbumTracksCount,
} from "../../Assets/js/helperFunctions";

import "./album.scss";

const Album = ({
  match: {
    params: { id },
  },
}) => {
  const [album, setAlbum] = useState(null);
  const [httpErrors, setHttpErrors] = useState(null);

  const firebase = useContext(FirebaseContext);

  useEffect(() => {
    //check if the user is authenticated then save the id in firebase db
    try {
      const { user_id, aud } = jwtGenerator(
        JSON.parse(localStorage.getItem("user-authed"))
      );

      if (aud !== "mini-spotify-clone") throw new Error();

      firebase.addRecentAlbum(user_id, id);
    } catch (error) {}

    getAlbum(id)
      .then(data => setAlbum(data))
      .catch(err => setHttpErrors(err));
  }, []);

  if (!album) return <h1>Please wait...</h1>;
  else {
    const { images, name, artists, release_date, total_tracks, tracks } = album;
    return (
      <div className="album">
        <div className="album__top-part">
          <div className="album__cover">
            <img src={images[1].url} alt="test" />
          </div>
          <div className="album__info">
            <span>Album</span>
            <h2>{name}</h2>
            <div className="album__info__more">
              <div className="album__info__more__ppicture">
                <img src={images[0].url} alt="test22" />
              </div>
              <span>
                {`${artists[0].name} - ${formatAlbumReleaseDate(
                  release_date
                )} - ${formatAlbumTracksCount(total_tracks)}`}
              </span>
            </div>
          </div>
        </div>
        <div className="album__titles">
          <div className="album__titles-header">
            <span># TITLE</span>
            <TimingIcon fill="#a3a3a3" />
          </div>
          <div className="album__titles-containner">
            {tracks.items.map((track, index) => (
              <Title data={track} key={index} />
            ))}
          </div>
        </div>
      </div>
    );
  }
};

export default Album;
