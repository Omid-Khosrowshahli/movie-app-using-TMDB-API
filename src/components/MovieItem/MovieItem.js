import { useRouter } from "next/router";

const imagePath = "https://image.tmdb.org/t/p/w500";

const MovieItem = ({data}) => {
  const router = useRouter();

  const getMovieInfo = () => {
    router.push(`/movie/${data.id}`);
  }
  
  return (
    <div className="movie" onClick={getMovieInfo}>
      <img src={`${imagePath}${data.poster_path}`} />
      <p>{data.title}</p>
      <div>
        <span>Rate: {data.vote_average}</span>
        <span>{data.release_date}</span>
      </div>
    </div>
  );
};

export default MovieItem;