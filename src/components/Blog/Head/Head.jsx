function Head() {
  return (
    <div className="flex flex-col flex-wrap items-center gap-2 mobile:gap-4">
      <div className="text-[19px] text-orange font-medium ">
        <span>Helpful Resources</span>
      </div>
      <div className="text-[36px] mobile:text-[42px]  md:text-[53px] leading-[60px] font-semibold font-Elza">
        <span>Recent blog articles</span>
      </div>
      <div className="text-[14px] mobile:text-[19px] md:text-[21px] leading-[20px] mobile:leading-[25px] md:leading-[29px] text-textBlackColor md:w-[730px] text-center">
        <span>
          We cover everything from design tips to presentation techniques to
          help you create beautiful and effective presentations.
        </span>
      </div>
    </div>
  );
}

export default Head;
