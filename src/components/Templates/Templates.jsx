import TemplateText from "./TemplateText/TemplateText";
import Frame from "./TpFrame/Frame";

function Templates() {
  return (
    <div className="relative top-[150px] md:top-[50px] lg:top-[100px] w-[100%] h-[700px] md:h-[400px] lg:h-[570px]">
      <div className="absolute flex flex-col-reverse md:flex-row   w-[100%] gap-16">
        <div className="w-[100%] flex md:justify-start justify-center">
            <Frame/>
        </div>
        <div className="w-[100%]">
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
