import ImageSection from "./ImageSection/ImageSection";
import TextSection from "./TextSection/TextSection";

function UseCases() {
  return (
    <div className="relative top-[550px] w-[100%] h-[873px]">
      <div className="absolute top-[53px] left-[53px] flex justify-between w-[96%]   gap-0">
        <div>
          <TextSection />
        </div>
        <div>
          <ImageSection />
        </div>
        <div className="absolute z-10 w-[100px] top-96 right-[500px]">
          <img src="./sparkle2.png" alt="sparkle" />
        </div>
      </div>
    </div>
  );
}

export default UseCases;
