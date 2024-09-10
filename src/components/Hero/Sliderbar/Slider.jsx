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
        <div>
          {/* <img src="./slider-tooltip.png" alt="tooltip" /> */}
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
