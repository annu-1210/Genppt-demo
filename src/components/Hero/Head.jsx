import ActionButton from "../ActionButton";

function Head() {
  return (
    <div className="flex flex-col items-center gap-5 px-3">
      <div className="flex justify-between w-[235px] h-[32px] ">
        <div className="flex relative w-[95px] items-end">
          <img
            src="./Images/userIcon-1.jpg"
            alt=""
            width={30}
            className="absolute width-[30px] h-[30px] rounded-[150px] border-2 border-textWhiteColor"
          />
          <img
            src="./Images/userIcon-2.jpg"
            alt=""
            width={30}
            className="absolute left-4 width-[30px] h-[30px] rounded-[150px] border-2   border-textWhiteColor"
          />

          <img
            src="./Images/userIcon-3.jpg"
            alt=""
            width={30}
            className="absolute left-8 width-[30px] h-[30px] rounded-[150px] border-2  border-textWhiteColor"
          />

          <img
            src="./Images/userIcon-4.png"
            alt=""
            width={30}
            className="absolute left-12 width-[30px] h-[30px] rounded-[150px] border-2 border-textWhiteColor"
          />
        </div>
        <div className="w-[172px] flex flex-col justify-center gap-1 ">
          <div className="h-[14px] w-[66px] flex">
            {Array(5)
              .fill()
              .map((_, i) => (
                <p key={i} className="text-yellow">
                  ★
                </p>
              ))}
          </div>
          <p className=" w-[149px] font-elzaMedium text-black text-[13px]">
            Trusted by 748 creators
          </p>
        </div>
      </div>
      <h1 className="text-[30px] md:text-[42px] lg:text-[54px] xl:text-[68px] max-w-[861px] max-h-[148px] font-elzaBold leading-8 md:leading-[74px] text-center mx-auto">
        Generate
        <span className="inline-flex items-center justify-center gap-2 pl-1 md:pl-2.5 text-orange md:gap-5 sm:gap-3">
          PowerPoint
          <img
            src="./Images/microsoft-powerpoint.png"
            alt="pp-logo"
            className="md:w-[40px] md:h-10 w-[27px]"
          />
        </span>
        <br />
        presentations in minutes
      </h1>
      <h6 className="common-para">
        Say goodbye to hours of manual work. GenPPT uses the power of AI to
        create professional PowerPoint presentations of any topic in just
        minutes.
      </h6>
      <div className="flex items-center justify-center w-full mt-2 ">
        <ActionButton desktop="Start generating" mobile="Get started" color="secondary" size="xxl"/>
      </div>
    </div>
  );
}

export default Head;
