
const CardBox = [
  {
    id: 1,
    time: "Monthly",
    price: 9,
    timespan: "/month",
    trial: "3 day free trial",
    buttonText: "Get started",
  },
  {
    id: 2,
    time: "Yearly",
    price: 90,
    timespan: "/year",
    trial: "3 day free trial",
    buttonText: "Get started",
  },
];

function PricingCard() {
  return (
    <div className="flex flex-wrap gap-10 py-5 w-[100%] justify-center">
      {CardBox.map((card) => {
        return (
          <div
            className="w-[243px] h-[233px] bg-white rounded-[5px] justify-center items-center font-Elza flex flex-col gap-1"
            key={card.id}
          >
            <div className="text-[23px] ">
              <span>{card.time}</span>
            </div>
            <div className="flex flex-col gap-0 ">
              <div className="flex items-center ">
                <strong className="flex items-center justify-center ">
                  <span className="text-[41px]">${card.price}</span>
                </strong>
                <span className="flex mt-3 text-base font-medium text-center ">{card.timespan}</span>
              </div>
              <div>
                <span className="text-orange text-[17px]">{card.trial}</span>
              </div>
            </div>
            <div className="w-[134px] h-[45px] flex  justify-center items-center mt-5">
              <button className="bg-orange w-[183px] h-[48px] rounded-[60px] py-[13px] px-[25px] font-Elza font-medium text-[16px] text-textWhiteColor border border-orange  hover:bg-white hover:text-orange ">
                {card.buttonText}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default PricingCard;
