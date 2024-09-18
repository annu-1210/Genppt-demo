import ActionButton from "../ActionButton";

function Head() {
  return (
    <div className="flex flex-col items-center gap-2 sm:gap-4">
      <h3 className="font-elzaSemibold text-[24px] mobile:text-[32px] sm:text-[40px] xl:text-[53px] leading-7 mobile:leading-[38px] sm:leading-[42px] md:leading-[46px] xl:leading-[60px] text-center text-BoldBlack">
        Get started with
        <span className="text-orange"> GenPPT</span>
      </h3>
      <h6 className="text-sm max-w-[710px] mx-1 text-wrap sm:text-lg xl:text-[21px] text-center font-elzaNormal text-BoldBlack">
        Get GenPPT today and transform your ideas into amazing PowerPoint
        presentations in only minutes!
      </h6>
      <div className="flex items-center justify-center w-full mt-4">
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
