function Card({ card }) {
  return (
    <div className=" w-[370px] lg:w-[425px] flex flex-col h-[373px] rounded-lg border bg-gradient-to-r from-CardGradient1 to-CardGradient2 shadow-tooltip1 font-Elza text-wrap pt-5 pl-6 relative">
      <div className="absolute flex flex-col gap-3 lg:w-[94.5%]">
        <div className="flex flex-col max-w-[376px] ">
          <span className="text-xl font-semibold text-wrap">{card.title}</span>
          <span className="text-[17px] font-light leading-6 text-wrap text-textBlackColor">
            {card.desc}
          </span>
        </div>
        <div className="rounded-lg w-[100%]">
          <img
            src={card.image}
            alt="card-img"
            className="w-[100%] h-[220px] rounded-lg absolute top-[132px] "
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
