import { useContext } from "react";

import historyContext from "./../../contexts/historyContext";

import "./albumItem.scss";

const AlbumItem = ({ data: { id, images, name, artists } }) => {
  const history = useContext(historyContext);

  const goToAlbumPage = () => {
    history.push(`album/${id}`);
  };

  return (
    <div className="albumItem" onClick={goToAlbumPage}>
      <div className="albumItem__cover">
        <img src={images[0].url} alt="test" />
      </div>
      <div className="albumItem__info">
        <span>{name}</span>
        <span>{artists[0].name}</span>
      </div>
    </div>
  );
};

export default AlbumItem;
