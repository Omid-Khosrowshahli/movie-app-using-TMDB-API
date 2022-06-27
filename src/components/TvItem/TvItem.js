import { useRouter } from "next/router";

const imagePath = "https://image.tmdb.org/t/p/w500";

const TvItem = ({data}) => {
  const router = useRouter();

  const getTvInfo = () => {
    router.push(`/tv/${data.id}`);
  };
  
  return (
    <div className="movie" onClick={getTvInfo}>
      <img src={`${imagePath}${data.poster_path}`} />
      <p>{data.name}</p>
      <span>Rate: {data.vote_average}</span>
      <span>{data.first_air_date}</span>
    </div>
  );
};

export default TvItem;