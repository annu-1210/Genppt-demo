import CountUp from "react-countup";

const stats = [
  {
    id: 1,
    start: 0,
    end: 1851,
    text: "PPTs generated",
  },
  {
    id: 2,
    start: 0,
    end: 5815,
    text: "Hours saved",
  },
];

function Stats() {
  return (
    <>
      <section className="relative w-full overflow-hidden bg-circleYellow">
        <div className="container relative flex justify-center py-6 sm:pt-14 sm:pb-12 px-3 mx-auto xl:max-w-[1440px]">
          <div className="flex flex-col items-center gap-8 lg:gap-12">
            <h3 className="flex text-wrap text-center font-elzaSemibold text-[27px] md:text-[38px] xl:text-[54px] leading-[30px] md:leading-[50px] xl:leading-stats max-w-[400px] md:max-w-[861px]">
              Over hundreds of presentations generated
            </h3>
            <div className="flex flex-col sm:flex-row justify-center gap-[17px] sm:gap-6 xl:gap-[57px]">
              {stats.map((data) => {
                return (
                  <div
                    className="flex flex-col justify-center items-center max-w-[190px] md:max-w-[185px] lg:max-w-[190px] xl:max-w-[266px] max-h-[112px] lg:max-h-[150px] xl:max-h-[168px] bg-statsCardBg rounded-md px-6 py-5 shadow-tooltipS"
                    key={data.id}
                  >
                    <h2 className="text-5xl font-elzaMedium xl:text-7xl">
                      <CountUp start={data.start} end={data.end} duration={3} />
                    </h2>
                    <h5 className="font-elzaNormal text-[19px] xl:text-[27px] w-[196px] text-center">
                      {data.text}
                    </h5>
                  </div>
                );
              })}
            </div>
          </div>
          <img
            src="./Images/presentation.png"
            alt="presentation"
            className=" max-w-[100px] xsm:max-w-[122px] md:max-w-[150px] lg:max-w-[200px] xl:max-w-none absolute left-[-51px] sm:left-0 top-[35%] sm:top-1/2 sm:translate-y-[-50%]"
          />
          <img
            src="./Images/time.png"
            alt="time"
            className="max-w-[100px] xsm:max-w-[122px] md:max-w-[150px] lg:max-w-[200px] xl:max-w-none absolute right-[-35px] sm:right-0 bottom-4 sm:bottom-0"
          />
        </div>
      </section>
    </>
  );
}

export default Stats;
