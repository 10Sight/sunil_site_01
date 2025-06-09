import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const products = [
  {
    title: "Tatakut | MURTI 16ER 1.50",
    subtitle: "Internal Threading Inserts",
    price: "₹2,527.00",
    image: "/products/Product.webp",
  },
  {
    title: "Tatakut | MURTI 16ER 2.00",
    subtitle: "Internal Threading Inserts",
    price: "₹2,527.00",
    image: "/products/Product.webp",
  },
  {
    title: "Tatakut | MURTI 16ER 1.50",
    subtitle: "Internal Threading Inserts",
    price: "₹2,527.00",
    image: "/products/Product.webp",
  },
  {
    title: "Tatakut | MURTI 16ER 2.00",
    subtitle: "Internal Threading Inserts",
    price: "₹2,527.00",
    image: "/products/Product.webp",
  },
  {
    title: "Tatakut | MURTI 16ER 2.50",
    subtitle: "Internal Threading Inserts",
    price: "₹2,527.00",
    image: "/products/Product.webp",
  },
  {
    title: "Tatakut | SPTR0903EDR",
    subtitle: "TDC grooving carbide insert",
    price: "₹1,770.00",
    image: "/products/Product.webp",
  },
];

const CarbideInsertSlider = () => {
  const progressRef = useRef(null);

  return (
    <section className="px-4 sm:px-6 lg:px-10 py-6">
      {/* Header with title and button */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-base sm:text-lg md:text-xl font-semibold">
          Shop By Carbide Insert
        </h2>
        <button className="text-xs sm:text-sm font-medium text-yellow-500 hover:underline">
          View All
        </button>
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={16}
        autoplay={{ delay: 2500 }}
        pagination={{
          el: ".progress-bar",
          clickable: false,
          renderProgressbar(progressbarFillClass) {
            return `<span class="${progressbarFillClass} h-1 bg-yellow-500 block"></span>`;
          },
        }}
        breakpoints={{
          320: { slidesPerView: 1.4 },
          480: { slidesPerView: 2 },
          640: { slidesPerView: 2.5 },
          768: { slidesPerView: 3.5 },
          1024: { slidesPerView: 4.5 },
        }}
        onSwiper={(swiper) => {
          if (progressRef.current) {
            swiper.params.pagination.el = progressRef.current;
            swiper.pagination.init();
            swiper.pagination.render();
            swiper.pagination.update();
          }
        }}
      >
        {products.map((product, i) => (
          <SwiperSlide key={i}>
            <div className="bg-white border rounded-lg shadow-sm hover:shadow-md transition p-3 h-full">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-36 sm:h-40 md:h-44 object-contain mb-2"
              />
              <h3 className="text-sm font-semibold text-gray-800 leading-tight line-clamp-2">
                {product.title}
              </h3>
              <p className="text-xs text-gray-500">{product.subtitle}</p>
              <p className="text-sm font-bold text-gray-800 mt-1">{product.price}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Progress bar */}
      <div
        ref={progressRef}
        className="progress-bar mt-4 w-full h-1 bg-gray-200 rounded overflow-hidden"
      />
    </section>
  );
};

export default CarbideInsertSlider;
