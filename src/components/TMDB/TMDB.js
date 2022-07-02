import { useEffect } from "react";
import useAxios from "../../hooks/useAxios";
import MovieItem from "../MovieItem/MovieItem";
import Movies from "../Movies/Movies";
import Slider from "../Slider/Slider";
import TvItem from "../TvItem/TvItem";

const baseUrl = "https://api.themoviedb.org/3/";
const token = "d3b1937f2d29d2efef3c447aeb8d2a64";
const moviesEndpoint = "movie/now_playing";
const tvEndpoint = "tv/airing_today";

const TMDB = () => {
  const [moviesRes, fetchMovies] = useAxios();
  const [tvRes, fetchTv] = useAxios();
  const data = [
    {
      title: 'Cinema', data: moviesRes.data?.data?.results, comp: (item) => <MovieItem data={item} />
    },
    {
      title: 'Tv', data: tvRes.data?.data?.results, comp: (item) => <TvItem data={item} />
    }
  ];
  
  useEffect(() => {
    fetchMovies(baseUrl + moviesEndpoint + "?api_key=" + token);
    fetchTv(baseUrl + tvEndpoint + "?api_key=" + token);
  }, []);

  return (
    <div>
      <Slider title="New Releases" sliderData={data} />
      <Movies />
    </div>
  );
}

export default TMDB;