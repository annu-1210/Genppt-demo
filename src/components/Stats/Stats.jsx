function Stats() {
  return (
    <>
      <section className="stats">
        <div className="h-[434px] bg-circleYellow z-20 relative top-[530px] flex justify-around">
          <div className="absolute top-[100px] left-[59px]">
            <img src="./presentation.png" alt="presentation" width={242}/>
          </div>
          <div className="w-[861px] h-[120px] flex flex-col absolute top-[54px] left-[289px] ">
            <div className="flex flex-wrap text-center font-semibold text-[54px]">
              <span>Over hundreds of presentations generated</span>
            </div>
            <div></div>
          </div>
          <div className="absolute top-[130px] left-[1112px]">
            <img src="./time.png" alt="time" width={282}/>
          </div>
        </div>
      </section>
    </>
  );
}

export default Stats;
