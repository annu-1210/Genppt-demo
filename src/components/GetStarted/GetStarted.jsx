import Head from "./Head/Head";

function GetStarted() {
  return (
    <div className="relative top-[100px] w-[100%] xl:h-[620px] laptop:h-[620px] flex flex-col justify-center items-center pt-5 gap-10 bg-no-repeat bg-bottom bg-ellipse2 ">
      <div className="w-[100%] ">
        <Head />
      </div>
      <div className="laptop:w-[100%]  h-[400px] flex justify-center items-end">
        <img src="./get-started-img.png" alt="getstarted-img" />
      </div>
    </div>
  );
}

export default GetStarted;
