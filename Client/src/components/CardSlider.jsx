import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';

import { FreeMode, Navigation } from 'swiper/modules';

const categories = [
  { name: "Hand Tools", img: "/CardSlider/01.avif" },
  { name: "Power Tools", img: "/CardSlider/02.avif" },
  { name: "Router Tools", img: "/CardSlider/01.avif" },
  { name: "Inserts", img: "/CardSlider/02.avif" },
  { name: "Cutters", img: "/CardSlider/01.avif" },
  { name: "Gauges", img: "/CardSlider/02.avif" },
  { name: "Hand Tools", img: "/CardSlider/01.avif" },
  { name: "Power Tools", img: "/CardSlider/02.avif" },
  { name: "Router Tools", img: "/CardSlider/01.avif" },
  { name: "Inserts", img: "/CardSlider/02.avif" },
  { name: "Cutters", img: "/CardSlider/01.avif" },
  { name: "Gauges", img: "/CardSlider/02.avif" },
];

const CardSlider = () => {
  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 py-6">
      <Swiper
        modules={[FreeMode, Navigation]}
        spaceBetween={16}
        freeMode={true}
        navigation={true}
        breakpoints={{
          320: { slidesPerView: 2.2 },
          480: { slidesPerView: 3 },
          640: { slidesPerView: 4 },
          768: { slidesPerView: 5 },
          1024: { slidesPerView: 6 },
          1280: { slidesPerView: 7 },
        }}
      >
        {categories.map((cat, i) => (
          <SwiperSlide key={i} className="text-center">
            <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 mx-auto rounded-full border border-gray-300 flex items-center justify-center hover:shadow-md transition duration-300 bg-white">
              <img
                src={cat.img}
                alt={cat.name}
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-contain"
              />
            </div>
            <p className="mt-2 text-xs sm:text-sm font-medium text-gray-800">{cat.name}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardSlider;
