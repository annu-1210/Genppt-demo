import ImageSection from "./ImageSection/ImageSection";
import TextSection from "./TextSection/TextSection";

function UseCases() {
  return (
    <div className="relative top-[100px] w-[100%] h-[1400px] mobile:h-[1500px] sm:h-[1250px] md:h-[873px] ">
      <div className="absolute top-[53px] left-[20px] md:left-[30px] bg-gray-500 xl:left-[53px] flex flex-col md:flex-row sm:items-center md:justify-between w-[96%]  gap-0 ">
        <div className="w-[100%]">
          <TextSection />
        </div>
        <div className=" laptop:w-[100%] xl:w-[70%] mt-10 flex items-center">
          <ImageSection />
        </div>
      </div>
    </div>
  );
}

export default UseCases;
