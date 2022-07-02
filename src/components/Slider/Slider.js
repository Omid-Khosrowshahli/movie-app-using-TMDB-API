import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useState } from 'react';

const Slider = ({ title, sliderData }) => {
  const [active, setActive] = useState(sliderData[0].title);

  const finalComp = sliderData.find((item) => (item.title === active)).comp
  const finalData = sliderData.find((item) => (item.title === active)).data
  
  return (
    <div>
      <div className="movie-tv">
        <span>{title}</span>

        <div className="slider-btns">
          {sliderData.map((item) => (
            <button 
              onClick={() => setActive(item.title)}
              className={active === item.title ? 'selected-btn' : 'btn'}
            >
              {item.title}
            </button>
          ))}
        </div>
      </div>
      
      <Swiper
        spaceBetween={10}
        slidesPerView={5.5}
      >
        {finalData?.map((otherItem) =><SwiperSlide>{finalComp(otherItem)}</SwiperSlide>)}
      </Swiper>
    </div>
  );
};

export default Slider;