import ActionButton from "../ActionButton";

function Head() {
  const userIcons = [
    "./Images/userIcon-1.jpg",
    "./Images/userIcon-2.jpg",
    "./Images/userIcon-3.jpg",
    "./Images/userIcon-4.png",
  ];

  return (
    <div className="flex flex-col items-center gap-5 px-3">
      <div className="flex justify-between w-[260px] h-[32px]">
        <div className="relative flex items-end w-[95px]">
          {userIcons.map((icon,index) => (
            <img
              key={index}
              src={icon}
              alt={`User ${index + 1}`}
              className="absolute w-[30px] h-[30px] rounded-full border-2 border-textWhiteColor"
              style={{ left: `${index * 15}px` }}
            />
          ))}
        </div>

        <div className="flex flex-col justify-center gap-1 w-[172px]">
          <div className="flex w-[66px] h-[14px]">
            {Array(5)
              .fill()
              .map((_, i) => (
                <p key={i} className="text-yellow">
                  ★
                </p>
              ))}
          </div>
          <p className="text-[13px] text-black font-elzaMedium w-[149px]">
            Trusted by 748 creators
          </p>
        </div>
      </div>

      <h1 className="text-[30px] md:text-[42px] lg:text-[54px] xl:text-[68px] max-w-[861px] max-h-[148px] font-elzaBold leading-8 md:leading-[74px] text-center mx-auto text-BoldBlack">
        Generate
        <span className="inline-flex items-center justify-center gap-2 pl-1 md:pl-2.5 text-orange md:gap-5 sm:gap-3">
          PowerPoint
          <img
            src="./Images/microsoft-powerpoint.png"
            alt="PowerPoint logo"
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

      <div className="flex items-center justify-center w-full mt-2">
        <ActionButton
          desktopLabel="Start generating"
          mobileLabel="Get started"
          color="secondary"
          size="xxl"
        />
      </div>
    </div>
  );
}

export default Head;
