import ActionButton from "../ActionButton";

const pricingOptions = [
  {
    id: 1,
    duration: "Monthly",
    amount: 9,
    billingCycle: "month",
    trialPeriod: "3 day free trial",
  },
  {
    id: 2,
    duration: "Yearly",
    amount: 90,
    billingCycle: "year",
    trialPeriod: "3 day free trial",
  },
];

function PricingCard() {
  return (
    <div className="flex flex-col flex-wrap justify-center gap-10 mx-auto md:flex-nowrap sm:flex-row lg:justify-between sm:gap-10">
      {pricingOptions.map((option) => (
        <div
          key={option.id}
          className="w-[243px] h-[233px] bg-white rounded-[5px] flex flex-col items-center justify-center font-Elza gap-1"
        >
          <h6 className="text-[23px] text-BoldBlack font-elzaMedium">
            {option.duration}
          </h6>
          <div className="flex flex-col gap-0 text-center">
            <p className="pt-2.5 text-[41px] leading-[31px] font-elzaSemibold text-BoldBlack">
              <span className="font-bold font-openSans">$</span>
              {option.amount}
              <span className="text-[26px]"><span className="font-bold font-openSans">/</span>{option.billingCycle}</span>
            </p>
            <div>
              <span className="text-base mobile:text-lg font-elzaMedium text-orange md:text-start">
                {option.trialPeriod}
              </span>
            </div>
          </div>
          <div className="w-[134px] h-[45px] flex justify-center items-center mt-3">
            <ActionButton
              desktopLabel="Get Started"
              mobileLabel="Get Started"
              color="secondary"
              size="md"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default PricingCard;
