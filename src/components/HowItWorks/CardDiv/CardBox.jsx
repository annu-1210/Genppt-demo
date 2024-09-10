import Card from "./Card";
import CardData from "../../../assets/CardData/CardData.jsx";

function CardBox() {
  return (
    <div className="  w-[100%] h-[700px] laptop:h-[373px] flex justify-center gap-[26px] items-center flex-wrap pt-14 ">
      {CardData.map((card) => {
        return (
          <div key={card.id} >
            <Card card={card} />
          </div>
        );
      })}
    </div>
  );
}

export default CardBox;
