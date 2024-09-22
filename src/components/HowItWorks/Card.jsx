/* eslint-disable react/prop-types */
function Card({ card }) {
  return (
    <div className="w-[346px] lg:w-[309px] xl:w-[432px] flex flex-col items-start justify-between h-[325px] xl:h-[384px] rounded-lg bg-gradient-to-br from-CardGradient1 to-CardGradient2 shadow-Presentationbox-shadow pt-6 pl-5 relative text-BoldBlack shadow-transition">
      <div className="flex flex-col w-full">
        <h6 className="text-lg xl:text-xl font-elzaMedium mb-1.5">
          {card.title}
        </h6>
        <p className="text-sm xl:text-[17px] leading-[22px] xsm:leading-6 font-elzaNormal">
          {card.desc}
        </p>
      </div>

      <img
        src={card.image}
        alt={`Image for ${card.title}`}
        className="w-full xl:min-h-[220px] rounded-lg"
      />
    </div>
  );
}

export default Card;
