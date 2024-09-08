function Head() {
  return (
    <div className=" relative h-[20rem]  top-0 flex w-[100%]">
      <div className="absolute top-[40px] left-12 text-center lg:text-start font-Elza font-medium text-[19px] flex flex-col gap-3">
        <div className="text-orange">
          <span>How it Works</span>
        </div>
        <div className="font-semibold text-[53px] leading-[60px]">
          <span>Create stunning</span>
          <div>
            <span>
              presentations <span className="text-orange">fast and easy</span>
            </span>
          </div>
        </div>
        <div className="text-textBlackColor max-w-[624px] text-wrap text-xl">
          <span>
            It’s as simple as you choosing the theme and topic - GenPPT will
            handle the rest including content and media.
          </span>
        </div>
      </div>
      <div className="absolute right-[185px] max-w-[100px] max-h-[100px] mt-[9rem] ">
        <img src="./magic-wand.png" alt="magic wand" />
      </div>
      <div className="absolute z-1 max-w-[244px] max-h[157px] top-[29px] right-0">
        <img src="./slide.png" alt="play button" />
      </div>
    </div>
  );
}

export default Head;
