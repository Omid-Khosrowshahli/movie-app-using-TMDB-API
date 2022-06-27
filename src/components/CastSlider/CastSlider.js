import useAxios from '../../hooks/useAxios';
import { useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Cast from '../Cast/Cast';

import styles from './CastSlider.module.css';

const baseUrl = "https://api.themoviedb.org/3/";
const token = "d3b1937f2d29d2efef3c447aeb8d2a64";

const CastSlider = ({ type, id }) => {
  const [cast, fetchCast] = useAxios();

  useEffect(() => {
    fetchCast(baseUrl + `${type}/${id}/credits` + "?api_key=" + token);
  }, []);
  
  return (
    <div className={styles.castSlider}>
      <p style={{color: 'white', fontSize: 30, fontWeight: 600}}>Cast</p>
      <Swiper
        spaceBetween={10}
        slidesPerView={5.5}
      >
        {cast.data?.data?.cast.map((item) => (
          <SwiperSlide><Cast data={item} /></SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CastSlider;