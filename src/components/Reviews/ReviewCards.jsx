import ReviewerData from '../../assets/ReviewerData/Reviewer';

function ReviewCards() {
  return (
    <div className="flex flex-wrap md:gap-x-8 lg:gap-[33px] w-full justify-center items-center">
      {ReviewerData.map((reviewer) => (
        <div
          key={reviewer.id}
          className="flex flex-col justify-between sm:w-6/12 lg:w-3/12 mt-[33px] max-w-[290px] lg:max-w-[230px] xl:max-w-[310px] gap-[38px] p-[15px] bg-gradient-to-r from-ReviewerGradient1 to-ReviewerGradient2 shadow-Reviewbox-shadow rounded-lg shadow-transition"
        >
          <p className="text-[17px] font-elzaNormal leading-[25px] text-BoldBlack">
            {reviewer.desc}
          </p>
          <div className="max-w-[140px] gap-0.5 h-[92px] flex flex-col justify-center font-elzaMedium">
            <img
              src={reviewer.icon}
              alt="Reviewer"
              width={40}
              height={40}
            />
            <p className="text-[19px]">{reviewer.name}</p>
            <p className="text-textBlackColor text-[16px]">
              {reviewer.jobTitle}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ReviewCards;
