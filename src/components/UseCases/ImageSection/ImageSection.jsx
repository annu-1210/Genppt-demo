function ImageSection() {
  return (
    <>
      <div className="hidden md:flex w-[100%] md:w-[300px] lg:w-[400px] halfxl:w-[500px] laptop:w-[670px] ">
        <img src="./use-cases-img.png" alt="use-cases-img" width={670} />
      </div>
      <div className="md:hidden  flex justify-center items-center w-[80%] mobile:w-[100%] mt-10">
        <img src="./use-cases-img-mobile.png" alt="use-cases-img" width={670} />
      </div>
    </>
  );
}

export default ImageSection;
