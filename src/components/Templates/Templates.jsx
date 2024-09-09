import TemplateText from "./TemplateText/TemplateText";
import Frame from "./TpFrame/Frame";

function Templates() {
  return (
    <div className="relative top-[100px] w-[100%] md:h-[570px]">
      <div className="absolute flex  w-[100%] gap-16">
        <div>
            <Frame/>
        </div>
        <div>
            <TemplateText/>
        </div>
        {/* <div className="absolute z-10 w-[100px] top-96 right-[500px]">
          <img src="./sparkle2.png" alt="sparkle" />
        </div> */}
      </div>
    </div>
  );
}

export default Templates;
