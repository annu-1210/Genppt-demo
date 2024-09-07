function Head() {
  return (
    <div className="flex flex-col items-center">
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
      <div className="pt-8 flex flex-col font-bold text-[68px] w-[861px] h-[148px] font-Elza justify-center items-center leading-[73px]">
        <div className="flex gap-5">
          <span>Generate</span>
          <div className="flex gap-5">
            <span className="text-orange">PowerPoint</span>
            <img src="./microsoft-powerpoint.png" alt="pp-logo" className="w-[40px] h-10 mt-6"/>
          </div>
        </div>
        <span> presentations in minutes</span>
      </div>
      <div className="w-[680px] h-[57px] font-Elza font-normal text-wrap text-xl mt-8 justify-center items-center text-textBlackColor pl-5 ml-3">
        <span>
          Say goodbye to hours of manual work. GenPPT uses the power of AI to
          create professional PowerPoint presentations of any topic in just
          minutes.
        </span>
      </div>
      <div className="w-[183px] h-[48px] flex justify-center items-center mt-10">
        <button className="bg-orange w-[183px] h-[48px] rounded-[60px] py-[10px] px-[17px] font-Elza font-medium text-xl text-textWhiteColor border border-orange  hover:bg-white hover:text-orange ">
          Start generating
        </button>
      </div>
    </div>
  );
}

export default Head;
