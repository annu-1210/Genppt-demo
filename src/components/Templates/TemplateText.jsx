import ActionButton from "../ActionButton";

function TemplateText() {
  return (
    <div className="flex flex-col gap-1.5 text-center xsm:gap-3 md:gap-2 xl:gap-4 md:w-1/2 md:text-start text-wrap">
      <h5 className="text-base xsm:text-lg font-elzaMedium text-orange md:text-start ">
        Professional Templates
      </h5>
      <h3 className="text-[25px] xsm:text-[35px] sm:text-[36px] md:text-[40px] lg:text-[50px] xl:text-[53px] leading-7 xsm:leading-[36px] md:leading-[42px] lg:leading-[56px] font-elzaSemibold text-BoldBlack">
        Over{" "}
        <span className="text-orange">
          50<span className="font-bold font-manrope">+</span> inspiring{" "}
        </span>
        templates
      </h3>
      <p className="mx-3 md:text-start common-para">
        GenPPT provides a range of professionally designed templates for any
        style, from elegant and minimalist to notebook.
      </p>
      <div className="w-full h-[48px] flex justify-center md:justify-start items-center mt-6 md:mt-5 ">
        <ActionButton
          desktopLabel="View templates"
          mobileLabel="View templates"
          color="teritary"
          size="xl"
        />
      </div>
    </div>
  );
}

export default TemplateText;
