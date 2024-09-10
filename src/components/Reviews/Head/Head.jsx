function Head() {
  return (
    <div className="flex flex-col items-center gap-1 md:gap-2 font-Elza">
      <div className="font-medium text-[15px] md:text-[19px]">
        <span className="text-orange">Customer Reviews</span>
      </div>
      <div className="text-center text-[27px] md:text-[53px] font-semibold leading-[30px] md:leading-[60px]">
        <span>Hear from our</span>
        <span className="text-orange"> satisfied customers</span>
      </div>
      <div className="text-wrap w-[350px] md:w-[730px] text-textBlackColor text-center text-[16px] md:text-[21px] leading-[22px] md:leading-[29px]">
        <span>
          With over 1,200 presentations generated and nearly 4,000 hours saved,
          GenPPT is a proven winner for our customers.
        </span>
      </div>
    </div>
  );
}

export default Head;
