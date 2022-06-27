import { useEffect } from "react";
import useAxios from "../../hooks/useAxios";
import MovieDetailsHeader from "../MovieDetailsHeader/MovieDetailsHeader";
import TvDetailsHeader from "../TvDetailsHeader/TvDetailsHeader";

const baseUrl = "https://api.themoviedb.org/3/";
const token = "d3b1937f2d29d2efef3c447aeb8d2a64";

const DetailsHeader = ({type, id}) => {
  const [movieDetails, fetchMovieDetails] = useAxios();
  const [tvDetails, fetchTvDetails] = useAxios();

  useEffect(() => {
    fetchMovieDetails(baseUrl + `${type}/${id}` + "?api_key=" + token);
    fetchTvDetails(baseUrl + `${type}/${id}` + "?api_key=" + token);
  }, []);
  
  return (
    <>
      {type === 'movie' && <MovieDetailsHeader details={movieDetails.data} />}
      {type === 'tv' && <TvDetailsHeader details={tvDetails.data} />}
    </>
  );
}

export default DetailsHeader;