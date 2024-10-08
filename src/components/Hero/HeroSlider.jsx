import { useState, useEffect } from "react";
import img_1 from "../../assets/hero-slider-2.png";
import img_2 from "../../assets/hero-slider-1.png";
import img_3 from "../../assets/hero-slider-3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import tooltip from "/Images/slider-tooltip.png";

function HeroSlider() {
  const [activeSlide, setActiveSlide] = useState(1);

  const images = [img_1, img_2, img_3, img_1, img_2, img_3];
  const tooltipImage = tooltip;

  const handleSlideChange = (swiper) => {
    setActiveSlide(swiper.realIndex);
  };

  useEffect(() => {
    setActiveSlide(1);
  }, []);

  return (
    <div className="w-full max-w-[1920px] mx-auto py-4">
      <Swiper
        loop={true}
        initialSlide={1}
        slidesPerView={'auto'}
        centeredSlides={true}
        spaceBetween={20}
        onSlideChange={handleSlideChange}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="relative custom-swiper-slide">
            <div
              className={`transition-opacity duration-300 ease-in-out ${
                activeSlide === index ? "opacity-100" : "opacity-70"
              }`}
            >
              {(index === 1 || index === 4) && (
                <img
                  src={tooltipImage}
                  alt="tooltip"
                  width={415}
                  className={`max-w-[200px] lg:max-w-[300px] xl:max-w-none absolute bottom-[-20px] sm:bottom-4 xl:bottom-8 right-12 sm:right-[46px] translate-x-[50%] ease-in-out duration-300 transform transition-opacity z-20 ${
                    activeSlide === index ? "opacity-100" : "opacity-0"
                  }`}
                                 />
              )}
              <img src={image} alt={`Slide ${index + 1}`} className="w-full" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default HeroSlider;
