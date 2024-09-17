import Head from "./Head";
import HeroSlider from "./HeroSlider";

function Hero() {
  return (
    <section className="relative w-full pt-[22px] bg-no-repeat bottom-0 bg-bottom bg-ellipse3 flex flex-col items-center ">
      <div className="max-h-[381px] container ">
        <Head />
      </div>
      <div className="2xl:max-w-[1920px] w-full max-h-[482px] mt-10">
        <HeroSlider />
      </div>
      <div className="absolute w-[100px] mobile:w-[100px] sm:w-[120px] lg:w-[320px] top-[290px] sm:top-[250px] md:top-[300px] lg:top-[330px] xl:top-[354px] left-[30px] sm:left-[80px] md:left-[110px] xl:left-[277px] z-30">
        <img src="./Images/sparkle.png" alt="sparkle image" width={150} />
      </div>
    </section>
  );
}

export default Hero;
