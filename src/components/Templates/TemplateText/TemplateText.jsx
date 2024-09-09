function TemplateText() {
  return (
    <div className=" w-[100%] flex flex-col gap-5 relative top-10 font-Elza flex-wrap text-wrap ">
      <div className="text-lg font-medium text-orange text-wrap font-Elza">
        <span>Professional Templates</span>
      </div>
      <div className="text-[53px] flex flex-col gap-0 leading-[60px] font-semibold">
        <span>
          Over <span className="text-orange">50+ inspiring </span>
        </span>
        <span>templates</span>
      </div>
      <div className="text-wrap text-textBlackColor text-[21px] leading-7 w-350px md:w-[650px]">
        <span>
          GenPPT provides a range of professionally designed templates for any
          style, from elegant and minimalist to notebook.
        </span>
      </div>
      <div className="w-[183px] h-[48px] flex justify-center items-center md:mt-5 ">
        <button className=" bg-white w-[183px] h-[48px] rounded-[60px] py-[10px] px-[17px] font-Elza font-medium text-xl  text-orange border border-orange  hover:bg-orange hover:text-textWhiteColor ">
          View templates
        </button>
      </div>
    </div>
  );
}

export default TemplateText;
