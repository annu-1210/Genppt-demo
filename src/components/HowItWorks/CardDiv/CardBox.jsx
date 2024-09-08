import Card from "./Card";
import CardData from "../../../assets/CardData";

function CardBox() {
  return (
    <div className="max-w-[1330px] h-[373px] flex gap-[26px] justify-evenly pl-4 ">
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
