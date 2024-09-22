function Head() {
  return (
    <div className="flex flex-col items-center gap-1 md:gap-2 ">
      <h5 className="font-elzaMedium text-[15px] md:text-[19px] text-orange">
        Customer Reviews
      </h5>
      <h3 className="text-center text-[25px] md:text-[53px] font-elzaSemibold leading-[30px] md:leading-[60px] text-BoldBlack">
        Our
        <span className="text-orange"> satisfied customers</span>
      </h3>
      <p className="common-para leading-[22px] md:leading-[29px] mt-1 xsm:mt-0 mx-3">
        With over 1,200 presentations generated and nearly 4,000 hours saved,
        GenPPT is a proven winner for our customers.
      </p>
    </div>
  );
}

export default Head;
