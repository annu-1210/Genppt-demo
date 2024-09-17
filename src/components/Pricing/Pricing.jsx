import Head from "./Head";
import PricingBox from "./PricingBox";

function Pricing() {
  return (
    <section className="relative max-w-full mx-auto bg-circleYellow py-[38px] xl:pt-[56px] md:pb-[57px] lg:pb-28">
      <div className="container max-w-[1440px] mx-auto flex flex-col items-center justify-center px-3 gap-14">
        <Head />
        <PricingBox />
      </div>
      <img
        src="./Images/slide2.png"
        alt="slide2"
        className="xl:flex absolute hidden top-[58px]"
      />

      <img
        src="./Images/pie-chart1.png"
        alt="pie-chart"
        className="absolute hidden xl:flex bottom-3"
      />

      <img
        src="./Images/marketing.png"
        alt="marketing"
        className="xl:flex absolute hidden top-[170px] xl:top-[140px] right-0"
      />

      <img
        src="./Images/pie-chart.png"
        alt="pie-chart"
        className="absolute right-0 hidden xl:flex bottom-2"
      />
    </section>
  );
}

export default Pricing;
