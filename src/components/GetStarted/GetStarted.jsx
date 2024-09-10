import Head from "./Head/Head";

function GetStarted() {
  return (
    <div className="relative top-[70px] w-[100%] h-[410px] mobile:h-[400px] sm:h-[470px] md:h-[510px] lg:h-[600px] xl:h-[640px] laptop:h-[660px] flex flex-col justify-center items-center  gap-10">
      <div className="w-[100%] absolute top-16">
        <Head />
      </div>
      <div className="absolute bottom-0 z-0 h-[50px] mobile:h-[70px] sm:h-[90px] md:h-[170px] lg:h-[220px] xl:h-[300px]">
        <img src="./bg-ellipse-2.png" alt="yellow-circle" />
      </div>
      <div className="absolute bottom-0 z-10 ">
        <img src="./get-started-img.png" alt="getstarted-img"/>
      </div>
    </div>
  );
}

export default GetStarted;
