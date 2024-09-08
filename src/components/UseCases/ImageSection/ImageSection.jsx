function ImageSection() {
  return (
    <div className="relative w-[100%] ">
      <div className="flex flex-col items-start ">
        <div className=" h-[72px] pl-16 ml-10    ">
          <img src="./prompt-div.png" alt="prompt" />
        </div>
        <div className=" h-[85px]  mr-40">
          <img src="./np-div.png" alt="np-prompt" />
        </div>
      </div>
      <div className="absolute left-4 top-44">
        <img src="./curve2.png" alt="vector" />
      </div>
      <div className="absolute z-0 right-18 top-52 w-[500px]">
        <img src="./image 12.png" alt="img" />
      </div>
      <div className="absolute right-0 z-10 top-44 w-[450px]">
        <img src="./image 13.png" alt="img" />
      </div>
    </div>
  );
}

export default ImageSection;
