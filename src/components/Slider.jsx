/* eslint-disable no-unused-vars */
import { useState } from "react";
import img_1 from "../assets/hero-slider-2.png";
import img_2 from "../assets/hero-slider-1.png";
import img_3 from "../assets/hero-slider-3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import { Navigation, Pagination } from "swiper/modules";

const Slider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveSlide(swiper.activeIndex);
  };

  return (
    <div className="w-full mx-auto">
      <Swiper
        // modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1.9}
        centeredSlides={true}
        // navigation
        // pagination={{ clickable: true }}
        onSlideChange={handleSlideChange}
      >
        <SwiperSlide>
          <div
            className={`${
              activeSlide === 0 ? "opacity-100" : "opacity-70"
            } bg-white shadow-lg rounded-lg p-5`}
          >
            <img src={img_1} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`${
              activeSlide === 1 ? "opacity-100" : "opacity-70"
            } bg-white shadow-lg rounded-lg p-5`}
          >
            <img src={img_2} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`${
              activeSlide === 2 ? "opacity-100" : "opacity-70"
            } bg-white shadow-lg rounded-lg p-5`}
          >
            <img src={img_3} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>

     // className={`transition-opacity duration-500 ${
            //   activeSlide === 0 ? "opacity-100" : "opacity-0"
            // } bg-white shadow-lg rounded-lg p-5`}
  );
};

export default Slider;
