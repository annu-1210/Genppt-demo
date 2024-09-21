import Head from "./Head";
import HeroSlider from "./HeroSlider";

function Hero() {
  return (
    <section className="relative w-full pt-[22px] flex flex-col items-center">
      <div className="max-h-[381px] container">
        <Head />
      </div>

      <div className="max-w-[1920px] mt-20 sm:mt-10">
        <HeroSlider />
        <img src="./Images/bg-ellipse-3.png" alt="hero-bg" className="absolute bottom-0 left-1/2 translate-x-[-50%] max-w-[1348px] w-full lg:w-[95%] min-h-[210px] xsm:min-h-[225px] sm:min-h-[236px] lg:h-auto object-cover object-top"/>
      </div>

      <div className="absolute w-[100px] sm:w-[120px] lg:w-[320px] top-[290px] sm:top-[250px] md:top-[300px] lg:top-[330px] xl:top-[330px] left-[30px] sm:left-[80px] md:left-[110px] xl:left-[277px] z-30">
        <img src="./Images/sparkle.png" alt="sparkle"  width={200} />
      </div>
    </section>
  );
}

export default Hero;
