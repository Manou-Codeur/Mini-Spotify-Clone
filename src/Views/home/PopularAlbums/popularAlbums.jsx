import "./popularAlbums.scss";

import AlbumItem from "./../../../Components/albumItem/albumItem";

const PopularAlbums = () => {
  return (
    <div className="popularAlbums">
      <h1>Popular Albums</h1>
      <div className="popularAlbums__containner">
        {[1, 2, 3, 4, 5, 6, 7, 8].map(item => (
          <AlbumItem key={item} />
        ))}
      </div>
    </div>
  );
};

export default PopularAlbums;
