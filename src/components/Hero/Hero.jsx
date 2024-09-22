import Head from "./Head";
import HeroSlider from "./HeroSlider";

function Hero() {
  return (
    <section className=" w-full pt-[22px] flex items-center justify-center">
      <div className="relative max-w-[1920px] flex flex-col items-center w-full">
        <div className="max-h-[381px] container">
          <Head />
        </div>

        <div className="max-w-[1920px] mt-20 mobile:mt-16 sm:mt-10">
          <HeroSlider />
          <img
            src="./Images/bg-ellipse-3.png"
            alt="hero-bg"
            className="absolute bottom-0 left-1/2 translate-x-[-50%] max-w-[1348px] w-full lg:w-[95%] min-h-[210px] mobile:min-h-[225px] sm:min-h-[236px] lg:h-auto object-cover object-top"
          />
        </div>

        <div className="absolute w-[90px] sm:w-[150px] lg:w-[160px] xl:w-[320px] top-[380px] mobile:top-[330px] sm:top-[250px] md:top-[260px] lg:top-[270px] xl:top-[310px] left-[20px] sm:left-[80px] md:left-[110px] xl:left-[277px] z-30">
          <img src="./Images/sparkle.png" alt="sparkle" width={200} />
        </div>
      </div>
    </section>
  );
}

export default Hero;
