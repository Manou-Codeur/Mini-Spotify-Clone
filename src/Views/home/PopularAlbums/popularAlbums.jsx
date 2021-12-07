import AlbumItem from "../../../Components/albumItem/albumItem";

const PopularAlbums = () => {
  return (
    <div className="popularAlbums">
      <h2>Popular Albums</h2>
      <div className="popularAlbums__containner">
        {[1, 2, 3, 4, 5, 6, 7, 8].map(item => (
          <AlbumItem key={item} />
        ))}
      </div>
    </div>
  );
};

export default PopularAlbums;
