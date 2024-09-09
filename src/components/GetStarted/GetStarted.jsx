import Head from "./Head/Head";
import ImageSection from "./ImageSection/ImageSection";

function GetStarted() {
  return (
    <div className="relative top-[100px] w-[100%] h-[590px] flex flex-col items-center pt-5 gap-10 ">
      <div className="w-[100%] ">
        <Head />
      </div>
      <div className="w-[100%] bg-no-repeat bg-bottom bg-ellipse2  h-[390px]">
        <ImageSection />
      </div>
    </div>
  );
}

export default GetStarted;
