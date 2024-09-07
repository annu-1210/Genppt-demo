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
      <div className="container">
        <div className="w-[1260px] h-[1210px] bg-circleYellow z-0 top-[380px] left-[70px] absolute rounded-full"></div>
        <div className="w-[295px] h-[50px] absolute z-20 top-[455px] left-[870px] flex justify-center items-center rounded-md shadow-tooltip1 font-Elza text-lg bg-gradient-to-r from-linearGradient1 to-linearGradient2">
          <span>Create a presentation about honey</span>
        </div>
        <div className="w-[386px] h-[79px] absolute z-20 top-[520px] left-[745px] flex gap-4 bg-tooltipBg rounded-xl py-3 px-2.5 shadow-tooltipS font-Elza opacity-100 ">
          <div className="">
            <img src="./np-icon.png" alt="np-icon" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-semibold font-Elza">
              New Presentation
            </span>
            <span className="text-base">
              A new presentation has been generated!
            </span>
          </div>
        </div>
        <div className="absolute z-20 top-[540px] left-[780px]">
          <img src="./curve.png" alt="arrow" />
        </div>
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
