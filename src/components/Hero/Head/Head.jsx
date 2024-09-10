function Head() {
  return (
    <div className="flex flex-col items-center ">
      <div className="flex justify-between w-[227px] h-[32px]">
        <div className="flex relative w-[85px]">
          <div className="">
            <img src="./reviewer-icon.png" alt="" width={30} />
          </div>
          <div className="absolute left-4">
            <img src="./reviewer-icon-2.png" alt="" width={30} />
          </div>
          <div className="absolute left-8">
            <img src="./reviewer-icon-3.png" alt="" width={30} />
          </div>
          <div className="absolute left-12">
            <img src="./reviewer-icon-4.png" alt="" width={30} />
          </div>
        </div>
        <div className="w-[142px] flex flex-col justify-center gap-1">
          <div className="h-[14px] w-[66px]">
            {Array(5)
              .fill()
              .map((_, i) => (
                <a key={i} className="text-yellow">
                  ★
                </a>
              ))}
          </div>
          <div className="font-Elza w-[139px] ">
            <span className="font-medium textBlackColor text-[13px]">
              Trusted by 748 creators
            </span>
          </div>
        </div>
      </div>
      <div className="pt-8 flex flex-col font-bold text-[30px] md:text-[42px] lg:text-[54px] xl:text-[68px] max-w-[861px] max-h-[148px] font-Elza justify-center items-center md:leading-[72px] leading-9 text-center text-wrap">
        <div className="flex items-center justify-center leading-[30px] xl:leading-[70px] md:gap-5 sm:gap-3">
          <span>Generate</span>
          <div className="flex items-center gap-2 md:gap-5 sm:gap-3">
            <span className="text-orange">PowerPoint</span>
            <div className="flex items-center justify-center">
              <img
                src="./microsoft-powerpoint.png"
                alt="pp-logo"
                className="md:w-[40px] md:h-10 w-[27px]  "
              />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap text-wrap ">
          <span>presentations in minutes</span>
        </div>
      </div>
      <div className=" max-w-[720px]  mb-6 md:mb-[33px] font-Elza font-normal text-wrap  sm:text-xl mt-4 md:mt-8 text-center text-textBlackColor pl-5">
        <span className="text-center">
          Say goodbye to hours of manual work. GenPPT uses the power of AI to
          create professional PowerPoint presentations of any topic in just
          minutes.
        </span>
      </div>
      <div className="w-[183px] h-[48px] md:flex justify-center items-center md:mt-4  hidden">
        <button className="bg-orange w-[183px] h-[48px] rounded-[60px] py-[10px] px-[17px] font-Elza font-medium text-xl text-textWhiteColor border border-orange  hover:bg-white hover:text-orange ">
          Start generating
        </button>
      </div>
      <div className="w-[130px] h-[45px] flex md:hidden justify-center items-center sm:mt-3 ">
        <button className="bg-orange w-[180px] sm:w-[183px] h-[40px] sm:h-[44px] rounded-[60px] py-[8px] sm:py-[10px] px-[15px] sm:px-[18px] font-Elza font-medium text-[16px] text-textWhiteColor border border-orange  hover:bg-white hover:text-orange ">
          Get started
        </button>
      </div>
    </div>
  );
}

export default Head;
