import Head from "./Head/Head";
import Slider from "./Sliderbar/Slider";

function Hero() {
  return (
    <div className="relative top-28">
      <Head />
      <div className="absolute top-[331px] left-[277px] z-20">
        <img src="./sparkle.png" alt="sparkle image" width={150} />
      </div>
      <Slider />
    </div>
  );
}

export default Hero;
