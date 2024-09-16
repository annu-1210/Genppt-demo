import TemplateText from "./TemplateText";

function Templates() {
  return (
    <section className="relative max-w-[1440px] mx-auto pt-2 mobile:pt-10 xl:py-[105px] ">
      <div className="container flex justify-end w-full mx-auto xl:pb-10">
        <TemplateText />
      </div>
      <img
        src="./Images/templates-frame.png"
        alt="frame"
        className="absolute left-0 bottom-0  top-[80px] hidden md:block w-full max-w-[48%] lg:max-w-[440px] xl:max-w-[48%]"
      />
      <img
        src="./Images/templates-frame.png"
        alt="frame"
        className=" mt-[68px] w-full max-w-[450px] sm:max-w-[70%] mx-auto md:hidden"
      />
    </section>
  );
}

export default Templates;
