import UcData from "../../../assets/UsecasesData/UcData";

function TextSection() {
  return (
    <div className="flex flex-col  gap-[30px] sm:gap-[20px] md:gap-[30px] lg:gap-[60px] font-Elza w-[90%] md:w-[100%] ">
      <div className="flex flex-col items-center sm:items-start sm:gap-2 md:gap-4 font-Elza ">
        <span className="text-orange ">Use Cases</span>
        <span className="text-wrap text-center sm:text-start font-semibold text-[33px] mobile:text-[40px] sm:text-[42px] md:text-[46px] lg:text-[53px] leading-[38px] mobile:leading-[46px] sm:leading-[51px] lg:leading-[60px] ">
          What can GenPPT generate?
        </span>
      </div>
      <div className="flex flex-wrap  md:h-[326px] gap-[8px] sm:gap-[10px] md:gap-[15px] lg:gap-[40px] ">
        {UcData.map((data) => {
          return (
            <div
              key={data.id}
              className="w-[270px] md:w-[210px] lg:w-[270px] xl:w-[300px]  h-[180px] flex flex-col gap-[4px] sm:gap-[8px] "
            >
              <div>
                <img src={data.icon} alt="icons" />
              </div>
              <div className="font-medium text-[20px] lg:text-[23px]">
                <span> {data.title}</span>
              </div>
              <div className="text-[15px]  lg:text-[16px] text-textBlackColor">
                <span>{data.desc}</span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-[183px] h-[48px] md:flex justify-center items-center md:mt-14  hidden">
        <button className="bg-orange w-[183px] h-[48px] rounded-[60px] py-[10px] px-[17px] font-Elza font-medium text-xl text-textWhiteColor border border-orange  hover:bg-white hover:text-orange ">
          Start generating
        </button>
      </div>
      <div className="w-[100%] h-[45px] flex md:hidden justify-center items-center">
        <button className="bg-orange w-[150px] h-[48px] rounded-[60px] py-[13px] px-[25px] font-Elza font-medium text-[16px] text-textWhiteColor border border-orange  hover:bg-white hover:text-orange ">
          Get started
        </button>
      </div>
    </div>
  );
}

export default TextSection;
