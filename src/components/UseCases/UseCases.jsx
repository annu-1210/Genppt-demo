import ImageSection from "./ImageSection/ImageSection";
import TextSection from "./TextSection/TextSection";

function UseCases() {
  return (
    <div className="relative top-[550px] w-[100%] h-[823px] ">
      <div className="absolute top-[53px] left-[53px] flex justify-between">
        <div>
          <TextSection />
        </div>
        <div>
          <ImageSection />
        </div>
      </div>
    </div>
  );
}

export default UseCases;
