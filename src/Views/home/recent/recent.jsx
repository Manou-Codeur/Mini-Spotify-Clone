import AlbumItem from "./../../../Components/albumItem/albumItem";

const Recent = () => {
  return (
    <div className="recent">
      <h2>Recent</h2>
      <div className="recent__containner">
        {[1, 2, 3, 4, 5].map(item => (
          <AlbumItem key={item} />
        ))}
      </div>
    </div>
  );
};

export default Recent;
