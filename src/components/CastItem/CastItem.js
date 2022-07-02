const imagePath = "https://image.tmdb.org/t/p/w500";

const CastItem = ({ data }) => {
  return (
    <div className="movie">
      <img src={`${imagePath}${data.profile_path}`} />
      <p style={{textAlign: 'center', color: 'white', fontWeight: 500}}>{data.name}</p>
    </div>
  );
};

export default CastItem;