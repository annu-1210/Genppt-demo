import { IoCheckmarkSharp } from "react-icons/io5";
import PricingCard from "./PricingCard";

const features = [
  { id: 1, text: "Access to GenPPT Chat" },
  { id: 2, text: "Generate unlimited PowerPoints" },
  { id: 3, text: "Access all templates" },
  { id: 4, text: "Unlimited input limit in chat" },
  { id: 5, text: "Latest AI model" },
];

function PricingBox() {
  return (
    <div className="flex xl:w-[923px] justify-between items-center font-Elza px-4 xsm:px-10 md:px-[38px] py-5 md:py-[55px] bg-gradient-to-r from-CardGradient1 to-CardGradient2 rounded-md">
      <div className="flex flex-wrap w-full gap-10 lg:gap-0 lg:justify-between lg:flex-nowrap">
        <div className="flex flex-col gap-[25px] items-start max-h-[227px]">
          <h4 className="text-2xl md:text-[26px] xl:text-3xl font-elzaMedium text-BoldBlack">
            What’s included
          </h4>
          <ul className="flex flex-col gap-[10px]">
            {features.map((feature) => (
              <li
                key={feature.id}
                className="flex gap-[9px] items-center text-BoldBlack font-elzaNormal"
              >
                <IoCheckmarkSharp />
                <p className="text-sm">{feature.text}</p>
              </li>
            ))}
          </ul>
        </div>
        <PricingCard />
      </div>
    </div>
  );
}

export default PricingBox;
