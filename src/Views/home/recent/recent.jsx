import AlbumItem from "./../../../Components/albumItem/albumItem";

const Recent = ({ recentAlbums }) => {
  if (recentAlbums.length === 0) return "Wait!!";
  return (
    <div className="recent">
      <h2>Recent</h2>
      <div className="recent__containner">
        {recentAlbums.map((item, index) => (
          <AlbumItem key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Recent;
