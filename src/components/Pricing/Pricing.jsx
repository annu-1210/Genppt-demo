import Head from "./Head/Head";
import PricingBox from "./PCard/PricingBox";

function Pricing() {
  return (
    <div className="relative top-[50px] bg-circleYellow h-[1300px] md:h-[900px] lg:h-[700px] w-[100%]">
      <div className="flex flex-col items-center justify-center py-16 gap-14 w-[100%]">
        <div>
          <Head />
        </div>
        <div className="w-[100%] flex justify-center">
          <PricingBox/>
        </div>
      </div>
      <div className="xl:flex absolute hidden top-[58px]">
        <img src="./slide2.png" alt="slide2" />
      </div>
      <div className="xl:flex absolute hidden top-[417px]">
        <img src="./pie-chart1.png" alt="pie-chart" />
      </div>
      <div className="xl:flex absolute hidden top-[170px] right-0">
        <img src="./marketing.png" alt="marketing" />
      </div>
      <div className="xl:flex absolute hidden top-[507px] right-0">
        <img src="./pie-chart.png" alt="pie-chart" />
      </div>
    </div>
  );
}

export default Pricing;
