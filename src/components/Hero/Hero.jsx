import Head from "./Head/Head";
import Slider from "./Sliderbar/Slider";

function Hero() {
  return (
    <div className="relative mx-auto top-20 w-[100%] bg-no-repeat bg-bottom bg-ellipse3 h-[800px]">
      <Head />
      <div className="absolute top-[354px] left-[277px] z-20">
        <img src="./sparkle.png" alt="sparkle image" width={150} />
      </div>
      <Slider />
    </div>
  );
}

export default Hero;
