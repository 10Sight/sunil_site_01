import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Slider01, Slider02, Slider03 } from '../assets/Slider/Slider.js';

import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const Slider = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      className="mySwiper w-full h-64 md:h-96"
    >
      {[Slider01, Slider02, Slider03].map((img, i) => (
        <SwiperSlide key={i}>
          <img src={img} alt={`Slider ${i + 1}`} className="w-full h-full object-center rounded-md" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
