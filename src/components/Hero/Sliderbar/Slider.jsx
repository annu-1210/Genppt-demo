// import slide_1 from "../../../assets/image 2.png";
// import slide_2 from "../../../assets/image 1.png";
// import slide_3 from "../../../assets/image 3.png";

// const images = [
//   {
//     id: 1,
//     image: slide_1,
//   },
//   {
//     id: 2,
//     image: slide_2,
//   },
//   {
//     id: 3,
//     image: slide_3,
//   },
// ];

function Slider() {
  return (
    <>
      <div className="container mt-6 w-[100%]">
        {/* <div className="w-[295px] h-[50px] absolute z-20 top-[480px] left-[875px] flex justify-center items-center rounded-md shadow-tooltip1 font-Elza text-lg bg-gradient-to-r from-linearGradient1 to-linearGradient2">
          <span>Create a presentation about honey</span>
        </div> */}
        <div className="w-[386px] h-[79px] absolute z-20 top-[540px] right-[360px] flex gap-4 bg-tooltipBg rounded-xl py-3 px-2.5 shadow-tooltipS font-Elza opacity-100 ">
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
        <div className="absolute z-20 top-[560px] left-[800px]">
          <img src="./curve.png" alt="arrow" />
        </div>
        <div className="flex mt-16 w-[100%] gap-x-2 z-10 ">
          <div className="">
            <img src="./image 2.png" alt="slide images" />
          </div>
          <div className="">
            <img src="./image 1.png" alt="slide images" />
          </div>
          <div className="">
            <img src="./image 3.png" alt="slide images" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Slider;
