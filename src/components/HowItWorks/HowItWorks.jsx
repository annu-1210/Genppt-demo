import CardBox from "./CardDiv/CardBox";
import Head from "./Head/Head";

function HowItWorks() {
  return (
    <div className="relative top-[100px] h-[1650px] sm:h-[1600px] md:h-[1230px] lg:h-[1200px] xl:h-[1200px] halfxl:h-[790px] w-[100%] z-30 flex flex-col items-center">
      <Head />
      <CardBox />
    </div>
  );
}

export default HowItWorks;
