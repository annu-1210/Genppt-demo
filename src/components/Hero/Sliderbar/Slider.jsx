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
      <div className="mb-10">
        <div className="w-[1260px] h-[1210px] bg-circleYellow z-0 top-[380px] left-[70px] absolute rounded-full"></div>
        <div className="flex mt-12 max-w-[1924px] h-[350px] gap-x-2 z-10 absolute">
          {images.map((img) => {
            return (
              <img
                src={img.image}
                alt="slide images"
                key={img.id}
                width={622.22}
                height={350}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Slider;
