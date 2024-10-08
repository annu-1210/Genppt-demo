function Head() {
  return (
    <div className="relative flex flex-col justify-start w-full text-center max-h-80 gap-1 sm:gap-2 md:gap-3 lg:gap-3.5 lg:items-start">
      <h5 className="text-base xsm:text-[19px] text-orange font-elzaMedium">
        How it Works
      </h5>

      <h3 className="font-elzaSemibold text-[22px] xsm:text-[32px] sm:text-[40px] xl:text-[53px] leading-7 xsm:leading-[38px] sm:leading-[42px] md:leading-[46px] xl:leading-[60px] lg:text-start text-BoldBlack">
      {/* text-center text-BoldBlack font-elzaSemibold text-[27px] md:text-[38px] xl:text-[54px] leading-[30px] md:leading-[50px] xl:leading-stats max-w-[400px] md:max-w-[861px] */}
        Create stunning
        <br />
        presentations <span className="text-orange">fast and easy</span>
      </h3>

      <h6 className="text-sm common-para md:max-w-[650px] lg:text-start mt-1 xsm:mt-0">
        Its as simple as you choosing the theme and topic - GenPPT will
        handle the rest including content and media.
      </h6>
      <img
        src="./Images/magic-wand.png"
        alt="magic wand"
        className="absolute hidden lg:flex right-[130px] xl:right-[186px] lg:max-w-[100px] xl:max-w-[180px] max-h-[100px] xl:max-h-[150px] xl:top-0 xl:mt-[8rem]"
      />

      <img
        src="./Images/slide.png"
        alt="slide preview"
        className="absolute hidden lg:flex z-1 lg:w-[245px] xl:w-[262px] top-[29px] right-0"
      />
    </div>
  );
}

export default Head;
