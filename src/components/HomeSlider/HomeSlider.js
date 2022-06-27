import useAxios from '../../hooks/useAxios';
import { useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useState } from "react";
import MovieItem from "../MovieItem/MovieItem";
import TvItem from "../TvItem/TvItem";

const baseUrl = "https://api.themoviedb.org/3/";
const token = "d3b1937f2d29d2efef3c447aeb8d2a64";
const moviesEndpoint = "movie/now_playing";
const tvEndpoint = "tv/airing_today";

const HomeSlider = () => {
  const [moviesRes, fetchMovies] = useAxios();
  const [tvRes, fetchTv] = useAxios();

  const [cinema, setCinema] = useState(true);
  const [tv, setTv] = useState(false);

  const switchToMovies = () => {
    setCinema(true);
    setTv(false);
  }

  const switchToTv = () => {
    setCinema(false);
    setTv(true);
  }

  useEffect(() => {
    fetchMovies(baseUrl + moviesEndpoint + "?api_key=" + token);
    fetchTv(baseUrl + tvEndpoint + "?api_key=" + token);
  }, []);

  return (
    <div>
      <div className="movie-tv">
        <span>New Releases</span>

        <div className="slider-btns">
          <button className={cinema ? 'selected-btn' : 'btn'} onClick={switchToMovies}>Cinema</button>
          <button className={tv ? 'selected-btn' : 'btn'} onClick={switchToTv}>TV</button>
        </div>
      </div>

      <Swiper
        spaceBetween={10}
        slidesPerView={5.5}
      >
        {cinema && moviesRes.data?.data?.results.map((item) => (
          <SwiperSlide><MovieItem data={item} /></SwiperSlide>
        ))}

        {tv && tvRes.data?.data?.results.map((item) => (
          <SwiperSlide><TvItem data={item} /></SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default HomeSlider;