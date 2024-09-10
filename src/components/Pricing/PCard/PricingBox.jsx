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
    <div className="flex w-[90%] lg:w-[923px] max-h-[1270px] justify-center items-center font-Elza py-[30px] px-[32px] bg-gradient-to-r from-CardGradient1 to-CardGradient2 rounded-md">
      <div className="gap-[29px] flex w-[100%] flex-wrap justify-center items-center
      ">
        <div className="flex flex-col gap-[29px] items-center mobile:items-start">
          <div className="text-[30px] font-[600]">
            <span>What’s included</span>
          </div>
          <div className="flex flex-col w-[282px] h-[162px] gap-[13px]">
            {features.map((feat) => {
              return (
                <div key={feat.id} className="flex gap-[9px]  items-center">
                  <div>{feat.icon}</div>
                  <div>{feat.text}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <PricingCard />
        </div>
      </div>
    </div>
  );
}

export default PricingBox;
