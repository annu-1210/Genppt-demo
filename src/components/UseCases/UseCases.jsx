import ImageSection from "./ImageSection";
import TextSection from "./TextSection";

function UseCases() {
  return (
    <section className="max-w-[1440px] mx-auto relative flex flex-col justify-center items-center py-[38px] md:py-[54px]">
      <div className="container z-30 flex px-5 mx-auto mobile:px-3 text-start gap-14 ">
        <TextSection />
        <ImageSection />
      </div>
      <img
        src="./Images/use-cases-img-mobile.png"
        alt="use-cases-img"
        width={680}
        height={500}
        className="mt-[63px] w-full max-w-[450px] sm:max-w-[70%] mx-auto md:hidden"
      />
    </section>
  );
}

export default UseCases;
