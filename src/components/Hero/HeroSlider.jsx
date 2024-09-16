import { useState } from "react";
import img_1 from "../../assets/hero-slider-2.png";
import img_2 from "../../assets/hero-slider-1.png";
import img_3 from "../../assets/hero-slider-3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import tooltip from "/Images/slider-tooltip.png";

const HeroSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const images = [img_1, img_2, img_3];

  const tooltipImage = tooltip;

  const handleSlideChange = (swiper) => {
    setActiveSlide(swiper.realIndex);
  };

  return (
    <div className="w-full max-w-[1920px] mx-auto py-4">
      <Swiper
        loop={true}
        centeredSlides={true}
        slidesPerView={1.3}
        spaceBetween={30}
        onSlideChange={handleSlideChange}
        breakpoints={{
          640: { slidesPerView: 1.3 },
          768: { slidesPerView: 1.5 },
          1024: { slidesPerView: 2.2 },
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="Swiper-Slide">
            <div
              className={`relative transition-opacity duration-500 ${
                activeSlide === index ? "opacity-100" : "opacity-70"
              }`}
            >
              {index === 1 && (
                <img
                  src={tooltipImage}
                  alt="Special Image"
                  width={415}
                  className={`absolute bottom-[-20px] sm:bottom-4 xl:bottom-8 right-12 sm:right-[46px] translate-x-[50%] ease-in-out duration-300 max-w-[200px] lg:max-w-[300px] xl:max-w-none z-10 ${
                    activeSlide === 1 ? "opacity-100" : "opacity-0"
                  }`}
                />
              )}
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                width={522}
                height={350}
                className="w-full "
              />
            </div>
          </SwiperSlide>
        ))}{" "}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
