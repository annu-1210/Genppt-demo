function Head() {
  return (
    <div className=" relative h-[20rem] top-0 flex w-[100%] items-center justify-center ">
      <div className="lg:absolute lg:top-[40px] lg:left-12 text-center lg:items-start font-Elza font-medium flex justify-center items-center flex-col gap-3 ">
        <div className=" text-[16px] mobile:text-[19px] text-orange">
          <span>How it Works</span>
        </div>
        <div className="font-semibold text-[25px] mobile:text-[32px] sm:text-[44px] md:text-[53px] leading-9 mobile:leading-[43px] sm:leading-[50px] md:leading-[60px] lg:text-start">
          <span>Create stunning</span>
          <div>
            <span>
              presentations <span className="text-orange">fast and easy</span>
            </span>
          </div>
        </div>
        <div className="text-textBlackColor w-[80%] text-wrap text-lg md:text-xl lg:text-start">
          <span>
            It’s as simple as you choosing the theme and topic - GenPPT will
            handle the rest including content and media.
          </span>
        </div>
      </div>
      <div className="absolute hidden lg:flex right-[130px] xl:right-[185px] lg:w-[100px] xl:w-[100px] max-h-[100px] xl:top-0 xl:mt-[9rem] ">
        <img src="./magic-wand.png" alt="magic wand" />
      </div>
      <div className="absolute hidden lg:flex z-1 xl:w-[244px] lg:w-[180px] max-h[157px] top-[29px] right-0">
        <img src="./slide.png" alt="play button" />
      </div>
    </div>
  );
}

export default Head;
