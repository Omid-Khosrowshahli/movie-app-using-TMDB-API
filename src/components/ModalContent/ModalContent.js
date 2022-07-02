import { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import MovieItem from "../MovieItem/MovieItem";
import styles from './ModalContent.module.css';

const baseUrl = "https://api.themoviedb.org/3/";
const token = "d3b1937f2d29d2efef3c447aeb8d2a64";

const ModalContent = () => {
  const [search, setSearch] = useState('');
  const [searchedMovie, setSearchedMovie] = useState([]);

  const [movieSearchResults, fetchMovieSearchResults] = useAxios();

  const handleSearchMovies = (s) => {
    let searchedMovies = movieSearchResults.data?.data?.results.filter((item) => {
      return (item.title.toUpperCase().includes(s.toUpperCase()));
    });

    setSearchedMovie(searchedMovies);
  }

  useEffect(() => {
    fetchMovieSearchResults(baseUrl + "movie/popular" + "?api_key=" + token);
  }, []);

  useEffect(() => {
    handleSearchMovies(search);
  }, [search]);

  return (
    <div className={styles.content}>
      <input type='text' onClick={(event) => setSearch(event.target.value)} />
      <div className={styles.modalSearchResults}>
        {searchedMovie?.map((item) => <MovieItem data={item} />)}
      </div>
    </div>
  );
};

export default ModalContent;