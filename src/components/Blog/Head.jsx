function Head() {
  return (
    <div className="flex flex-col flex-wrap items-center gap-2 mobile:gap-4">
      <h5 className="text-[19px] text-orange font-elzaMedium ">
        Helpful Resources
      </h5>
      <h3 className="font-elzaSemibold text-[24px] mobile:text-[32px] sm:text-[40px] xl:text-[53px] leading-7 mobile:leading-[38px] sm:leading-[42px] md:leading-[46px] xl:leading-[60px] text-center text-BoldBlack ">
        Recent blog articles
      </h3>
      <h6 className="text-base max-w-[720px] text-wrap sm:text-lg xl:text-[21px] text-center font-elzaNormal text-BoldBlack">
        We cover everything from design tips to presentation techniques to help
        you create beautiful and effective presentations.
      </h6>
    </div>
  );
}

export default Head;
