import AlbumItem from "../../../Components/albumItem/albumItem";

const PopularAlbums = ({ albums }) => {
  return (
    <div className="popularAlbums">
      <h2>Popular Albums</h2>
      <div className="popularAlbums__containner">
        {albums.map((album, index) => (
          <AlbumItem key={index} data={album} />
        ))}
      </div>
    </div>
  );
};

export default PopularAlbums;
