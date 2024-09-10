import CountUp from "react-countup";

function Stats() {
  return (
    <>
      <section className="stats">
        <div className="h-[570px] mobile:h-[550px] sm:h-[500px] md:h-[434px] bg-circleYellow relative top-[80px] flex justify-center w-[100%] pt-12">
          <div className="absolute top-[200px] md:top-[100px] left-[-46px] md:left-[10px] lg:left-[10px] w-[122px] md:w-[142px] lg:w-[242px]">
            <img src="./presentation.png" alt="presentation" />
          </div>
          <div className="w-[60%] flex flex-col  items-center gap-8 lg:gap-12 ">
            <div className="flex flex-wrap text-center font-semibold text-[27px] md:text-[44px] xl:text-[54px] leading-[30px] md:leading-[50px] xl:leading-stats">
              <span>Over hundreds of presentations generated</span>
            </div>
            <div className="flex justify-center items-center w-[100%] h-[163px] gap-14 flex-wrap">
              <div className="flex flex-col justify-center items-center w-[191px] md:w-[200px] xl:w-[266px] h-[116px] lg:h-[150px] xl:h-[163px] bg-white rounded-md px-10 py-5 font-Elza shadow-tooltipS">
                <span className="font-medium text-[48px] lg:text-7xl"><CountUp start={0} end={1851} duration={3} /></span>
                <span className="font-normal text-[19px] xl:text-[27px] w-[196px] text-center">PPTs generated</span>
              </div>
              <div className="flex flex-col justify-center items-center w-[191px] md:w-[200px] xl:w-[266px] h-[116px] lg:h-[150px] xl:h-[163px] bg-white rounded-md px-10 py-5 font-Elza shadow-tooltipS">
                <span className="font-medium text-[48px] lg:text-7xl"> <CountUp start={0} end={5815} duration={3} /></span>
                <span className="font-normal text-[19px] xl:text-[27px]">Hours saved</span>
              </div>
            </div>
          </div>
          <div className="absolute top-[377px] md:top-[130px] right-0  md:right-0  w-[122px] md:w-[142px] lg:w-[242px]">
            <img src="./time.png" alt="time"  />
          </div>
        </div>
      </section>
    </>
  );
}

export default Stats;
