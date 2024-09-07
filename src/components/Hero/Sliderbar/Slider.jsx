import slide_1 from "../../../assets/image 2.png";
import slide_2 from "../../../assets/image 1.png";
import slide_3 from "../../../assets/image 3.png";

const images = [
  {
    id: 1,
    image: slide_1,
  },
  {
    id: 2,
    image: slide_2,
  },
  {
    id: 3,
    image: slide_3,
  },
];

function Slider() {
  return (
    <>
      <div className="flex mt-10 max-w-[1924px] h-[350px] gap-x-2">
        {images.map((img) => {
          return <img src={img.image} alt="slide images" key={img.id} width={622.22} height={350}/>;
        })}
      </div>
    </>
  );
}

export default Slider;
