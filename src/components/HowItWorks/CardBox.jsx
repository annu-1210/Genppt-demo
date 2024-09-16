import Card from "./Card";
import CardData from "../../assets/CardData/CardData.jsx";

function CardBox() {
  return (
    <div className="  w-full flex justify-center lg:justify-start gap-[26px] items-center flex-wrap lg:flex-nowrap">
      {CardData.map((card) => {
        return <Card card={card} key={card.id} />;
      })}
    </div>
  );
}

export default CardBox;
