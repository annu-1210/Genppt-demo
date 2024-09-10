function Head() {
  return (
    <div className="flex flex-col flex-wrap items-center gap-4 sm:gap-6 font-Elza">
      <div className=" text-[38px] text-center sm:text-[49px] md:text-[53px] leading-[48px] sm:leading-[60px] font-semibold">
        <span>Get started with</span>
        <span className="text-orange"> GenPPT</span>
      </div>
      <div className="text-[16px] sm:text-[19px] md:text-[21px] text-center text-wrap  md:w-[730px] text-textBlackColor">
        <span>
          Get GenPPT today and transform your ideas into amazing PowerPoint
          presentations in only minutes!
        </span>
      </div>
      <div>
      <div className="w-[183px] h-[48px] md:flex justify-center items-center mt-4  hidden">
        <button className="bg-orange w-[183px] h-[48px] rounded-[60px] py-[10px] px-[17px] font-Elza font-medium text-xl text-textWhiteColor border border-orange  hover:bg-white hover:text-orange ">
          Start generating
        </button>
      </div>
      <div className="w-[134px] h-[45px] flex md:hidden justify-center mt-4 items-center ">
        <button className="bg-orange w-[183px] h-[48px] rounded-[60px] py-[13px] px-[25px] font-Elza font-medium text-[16px] text-textWhiteColor border border-orange  hover:bg-white hover:text-orange ">
          Get started
        </button>
      </div>
      </div>
    </div>
  );
}

export default Head;
