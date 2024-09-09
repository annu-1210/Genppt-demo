import Head from "./Head/Head";
import PricingBox from "./PCard/PricingBox";

function Pricing() {
  return (
    <div className="relative top-[250px] bg-circleYellow h-[983px] md:h-[705px]">
      <div className="flex flex-col items-center justify-center py-16 gap-14">
        <div>
          <Head />
        </div>
        <div>
          <PricingBox/>
        </div>
      </div>
      <div className="absolute top-[58px]">
        <img src="./slide2.png" alt="slide2" />
      </div>
      <div className="absolute top-[417px]">
        <img src="./pie-chart1.png" alt="pie-chart" />
      </div>
      <div className="absolute top-[170px] right-0">
        <img src="./marketing.png" alt="marketing" />
      </div>
      <div className="absolute top-[507px] right-0">
        <img src="./pie-chart.png" alt="pie-chart" />
      </div>
    </div>
  );
}

export default Pricing;
