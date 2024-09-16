import ActionButton from "../ActionButton";

const CardBox = [
  {
    id: 1,
    time: "Monthly",
    price: 9,
    timespan: "/month",
    trial: "3 day free trial",
  },
  {
    id: 2,
    time: "Yearly",
    price: 90,
    timespan: "/year",
    trial: "3 day free trial",
  },
];

function PricingCard() {
  return (
    <div className="flex flex-col flex-wrap justify-center gap-10 mx-auto md:flex-nowrap sm:flex-row lg:justify-between sm:gap-10">
      {CardBox.map((card) => {
        return (
          <div
            className="w-[243px] h-[233px] bg-white rounded-[5px] justify-center items-center font-Elza flex flex-col gap-1"
            key={card.id}
          >
            <h6 className="text-[23px] text-BoldBlack font-elzaMedium">
              {card.time}
            </h6>
            <div className="flex flex-col gap-0 text-center">
              <p className=" pt-2.5 text-xl md:text-[26px] text-center leading-[31px] font-elzaSemibold text-BoldBlack">
                <span className="text-[41px]">${card.price}</span>
                {card.timespan}
              </p>
              <div>
                <span className="text-base mobile:text-lg font-elzaMedium text-orange md:text-start">
                  {card.trial}
                </span>
              </div>
            </div>
            <div className="w-[134px] h-[45px] flex  justify-center items-center mt-3">
              <ActionButton desktop="Get Started" mobile="Get Started" color="secondary" size="md"/>
              {/* <button className="bg-orange w-[183px] h-[48px] rounded-[60px] py-[13px] px-[25px] font-Elza font-medium text-[16px] text-textWhiteColor border border-orange  hover:bg-white hover:text-orange ">
              </button> */}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default PricingCard;
