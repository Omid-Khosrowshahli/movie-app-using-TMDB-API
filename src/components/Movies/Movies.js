import { useState } from "react";
import { useEffect } from "react";
import useAxios from '../../hooks/useAxios';
import MovieItem from "../MovieItem/MovieItem";
import styles from "./Movies.module.css";

const baseUrl = "https://api.themoviedb.org/3/";
const token = "d3b1937f2d29d2efef3c447aeb8d2a64";
const popularEndpoint = "movie/popular";
const topRatedEndpoint = "movie/top_rated";
const upcomingEndpoint = "movie/upcoming";

const Movies = () => {
  const [active, setActive] = useState('popular');
  const [search, setSearch] = useState('');
  const [searchedMovie, setSearchedMovie] = useState([]);

  const [popularMovies, fetchPopularMovies] = useAxios();
  const [topRatedMovies, fetchTopRatedMovies] = useAxios();
  const [upcomingMovies, fetchUpcomingMovies] = useAxios();

  const searchMovie = (s) => {
    let searchedMoviesList = [];

    if (active === 'popular') {
      searchedMoviesList = popularMovies.data?.data?.results?.filter((item) => (
        item.title.toUpperCase().includes(s.toUpperCase())
      )
      )
    }
    if (active === 'top-rated') {
      searchedMoviesList = topRatedMovies.data?.data?.results?.filter((item) => {
        return item.title.toUpperCase().includes(s.toUpperCase());
      }
      )
    }
    if (active === 'upcoming') {
      searchedMoviesList = upcomingMovies.data?.data?.results?.filter((item) => {
        return item.title.toUpperCase().includes(s.toUpperCase())
      }
      )
    }

    setSearchedMovie(searchedMoviesList);
  }
  useEffect(() => {
    fetchPopularMovies(baseUrl + popularEndpoint + "?api_key=" + token);
    fetchTopRatedMovies(baseUrl + topRatedEndpoint + "?api_key=" + token);
    fetchUpcomingMovies(baseUrl + upcomingEndpoint + "?api_key=" + token);
  }, []);

  useEffect(() => {
    searchMovie(search)
  }, [search, active]);
  
  return (
    <div>
      <div className={styles.searchAndBtns}>
        <input type="text" placeholder="Search..." onChange={(event) => setSearch(event.target.value)} />
        <div className="btns">
          <button className={active === 'popular' ? 'selected-btn' : 'btn'} onClick={() => setActive('popular')}>
            Popular
          </button>
          <button className={active === 'top-rated' ? 'selected-btn' : 'btn'} onClick={() => setActive('top-rated')}>
            Top rated
          </button>
          <button className={active === 'upcoming' ? 'selected-btn' : 'btn'} onClick={() => setActive('upcoming')}>
            Upcoming
          </button>
        </div>
      </div>
      <div className={styles.allMovies}>
        {search ? searchedMovie?.map((item) => <MovieItem data={item} />) :
          <>
            {active === 'popular' &&
            popularMovies.data?.data?.results?.map((item) => (
              <MovieItem data={item} />
            ))}
          
            {active === 'top-rated' &&
              topRatedMovies.data?.data?.results?.map((item) => (
                <MovieItem data={item} />
            ))}
            
            {active === 'upcoming' &&
              upcomingMovies.data?.data?.results?.map((item) => (
                <MovieItem data={item} />
            ))}
          </>
        }
      </div>
    </div>
  );
};

export default Movies;