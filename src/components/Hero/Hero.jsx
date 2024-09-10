import Head from "./Head/Head";

function Hero() {
  return (
    <div className="relative top-20 w-[100%] h-[500px] mobile:h-[440px] sm:h-[520px] md:h-[640px] lg:h-[710px] xl:h-[800px] mobile:bg-none bg bg-no-repeat bg-bottom bg-ellipse3  ">
      <div>
        <Head />
      </div>
      <div className="absolute w-[100px] mobile:w-[100px] sm:w-[120px] lg:w-[320px] top-[290px] sm:top-[250px] md:top-[300px] lg:top-[330px] xl:top-[354px] left-[30px] sm:left-[80px] md:left-[110px] xl:left-[277px] z-30">
        <img src="./sparkle.png" alt="sparkle image" width={150} />
      </div>
      <div className="absolute w-[150px] mobile:w-[150px] sm:w-[230px] lg:w-[420px] z-20 top-[380px] mobile:top-[370px] sm:top-[400px] md:top-[500px] lg:top-[430px] xl:top-[510px] halfxl:top-[490px] right-[25px] mobile:right-[40px] sm:right-[90px] lg:right-[65px] xl:right-40 halfxl:right-[200px]">
        <img src="./slider-tooltip.png" alt="tooltip" />
      </div>
      <div className="absolute hidden mobile:flex bottom-[-5px] md:bottom-2 lg:bottom-4 laptop:bottom-3 z-10 w-[100%] ">
        <img src="./hero-slide.png" alt="slider" />
      </div>
      <div className="absolute mobile:hidden z-10 w-[100%] bottom-[-8px] ">
        <img src="./hero-slide-mobile.png" alt="slider" width={500} />
      </div>
      <div className="absolute bottom-0 z-0 hidden mobile:flex items-center justify-center w-[100%] h-[200px] mobile:h-[120px] sm:h-[190px] md:h-[225px] lg:h-[300px] xl:h-[370px] halfxl:h-[390px] ">
        <img src="./bg-ellipse-3.png" alt="ellipse" />
      </div>
      {/* <div className="absolute flex mobile:hidden bottom-0 z-0 w-[100%] h-[180px]">
        <img src="./bg-ellipse.png" alt="ellipse" />
      </div> */}
    </div>
  );
}

export default Hero;
