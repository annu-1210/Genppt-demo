import CountUp from "react-countup";

function Stats() {
  return (
    <>
      <section className="stats">
        <div className="h-[434px] bg-circleYellow z-20 relative top-[80px] flex justify-around">
          <div className="absolute top-[100px] left-[59px]">
            <img src="./presentation.png" alt="presentation" width={262} />
          </div>
          <div className="w-[861px] flex flex-col justify-center items-center absolute top-[54px] left-[289px] gap-y-12 ">
            <div className="flex flex-wrap text-center font-semibold text-[54px] leading-stats">
              <span>Over hundreds of presentations generated</span>
            </div>
            <div className="flex justify-center items-center w-[589px] h-[163px] gap-x-14">
              <div className="flex flex-col justify-center items-center w-[266px] h-[163px] bg-white rounded-md px-10 py-5 font-Elza shadow-tooltipS">
                <span className="font-medium text-7xl"><CountUp start={0} end={1851} duration={3} /></span>
                <span className="font-normal text-[27px] w-[196px]">PPTs generated</span>
              </div>
              <div className="flex flex-col justify-center items-center w-[266px] h-[163px] bg-white rounded-md px-10 py-5 font-Elza shadow-tooltipS">
                <span className="font-medium text-7xl"> <CountUp start={0} end={5815} duration={3} /></span>
                <span className="font-normal text-[27px]">Hours saved</span>
              </div>
            </div>
          </div>
          <div className="absolute top-[130px] left-[1112px]">
            <img src="./time.png" alt="time" width={282} />
          </div>
        </div>
      </section>
    </>
  );
}

export default Stats;
