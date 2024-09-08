
function Card({card}) {
  return (
    <div className="w-[436px] flex flex-col justify-between h-[373px] rounded-lg border bg-gradient-to-r from-CardGradient1 to-CardGradient2 shadow-tooltip1 font-Elza text-wrap pt-5 pl-6 relative">
      <div className="flex flex-col max-w-[376px] ">
        <span className="text-xl font-semibold text-wrap">{card.title}</span>
        <span className="text-[17px] font-light leading-6 text-wrap text-textBlackColor">{card.desc}</span>
      </div>
      <div className="absolute top-[150.5px] right-0 border rounded-lg ">
        <img src={card.image} alt="card-img" className="w-[410px] h-[220px]"/>
      </div>
    </div>
  );
}

export default Card;
