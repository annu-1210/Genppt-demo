import CardBox from "./CardBox";
import Head from "./Head";

function HowItWorks() {
  return (
    <section className="max-w-[1440px] mx-auto relative flex justify-center items-center py-[38px] md:py-[54px]">
      <div className="container z-30 flex flex-col px-3 mx-auto text-start gap-14 ">
        <Head />
        <CardBox />
      </div>
    </section>
  );
}

export default HowItWorks;
