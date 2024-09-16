import { IoCheckmarkSharp } from "react-icons/io5";
import PricingCard from "./PricingCard";

const features = [
  {
    id: 1,
    icon: <IoCheckmarkSharp />,
    text: "Access to GenPPT Chat",
  },
  {
    id: 2,
    icon: <IoCheckmarkSharp />,
    text: "Generate unlimited PowerPoints",
  },
  {
    id: 3,
    icon: <IoCheckmarkSharp />,
    text: "Access all templates",
  },
  {
    id: 4,
    icon: <IoCheckmarkSharp />,
    text: "Unlimited input limit in chat",
  },
  {
    id: 5,
    icon: <IoCheckmarkSharp />,
    text: "Latest AI model",
  },
];

function PricingBox() {
  return (
    <div className="flex xl:w-[923px] justify-between items-center font-Elza px-4 xsm:px-10 md:px-[38px] py-5 md:py-[55px] bg-gradient-to-r from-CardGradient1 to-CardGradient2 rounded-md">
      <div className="flex flex-wrap w-full gap-10 lg:gap-0 lg:justify-between lg:flex-nowrap">
        <div className="flex flex-col gap-[25px] items-center text-center mobile:items-start  max-h-[227px]">
          <h4 className="text-2xl md:text-[26px] xl:text-3xl font-elzaMedium text-BoldBlack">What’s included</h4>
          <ul className="flex flex-col  gap-[10px]">
            {features.map((feat) => {
              return (
                <li key={feat.id} className="flex gap-[9px] items-center text-BoldBlack font-elzaNormal">
                  <div>{feat.icon}</div>
                  <p className="text-sm">{feat.text}</p>
                </li>
              );
            })}
          </ul>
        </div>
        {/* <div className="flex flex-col justify-center sm:flex-row lg:justify-between sm:gap-10"> */}
        <PricingCard />
        {/* </div> */}
       
      </div>
    </div>
  );
}

export default PricingBox;
