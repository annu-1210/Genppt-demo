import UcData from "../../../assets/UsecasesData/UcData";

function TextSection() {
  return (
    <div className="flex flex-col gap-[60px] font-Elza  w-[100%]">
      <div className="flex flex-col gap-4 font-Elza">
        <span className="text-orange">Use Cases</span>
        <span className="max-w-[591px] text-wrap font-semibold text-[53px] leading-[60px]">
          What can GenPPT generate?
        </span>
      </div>
      <div className="flex flex-wrap max-w-[665px] h-[658px] md:h-[326px] gap-[40px]">
        {UcData.map((data) => {
          return (
            <div
              key={data.id}
              className="max-w-[310px] max-h-[170px] flex flex-col gap-[8px]"
            >
              <div>
                <img src={data.icon} alt="icons" />
              </div>
              <div className="font-medium text-[23px]">
                <span> {data.title}</span>
              </div>
              <div className="text-[16px] text-textBlackColor">
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
      <div className="w-[134px] h-[45px] flex md:hidden justify-center items-center mt-14 ">
        <button className="bg-orange w-[183px] h-[48px] rounded-[60px] py-[13px] px-[25px] font-Elza font-medium text-[16px] text-textWhiteColor border border-orange  hover:bg-white hover:text-orange ">
          Get started
        </button>
      </div>
    </div>
  );
}

export default TextSection;
