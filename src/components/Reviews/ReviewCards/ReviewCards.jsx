import ReviewerData from "../../../assets/ReviewerData/Reviewer";

function ReviewCards() {
  return (
    <div className="flex flex-wrap gap-[33px] w-[100%] justify-center items-center ">
      {ReviewerData.map((user) => {
        return (
          <div
            className="flex flex-col gap-[37px] p-4 border w-[300px] h-[260px] bg-gradient-to-r from-ReviewerGradient1 to-ReviewerGradient2 shadow-Reviewbox-shadow rounded-lg font-Elza"
            key={user.id}
          >
            <div className="text-[17px] font-normal leading-[25px] text-wrap">
              <span>{user.desc}</span>
            </div>
            <div className="w-[136px] gap-[6px] h-[92px] flex flex-col justify-center">
              <div className="w-[40px] h-[40px]">
                <img src={user.icon} alt="user" />
              </div>
              <div className="flex flex-col gap-0">
                <div className="text-[19px] font-[500] ">
                  <span>{user.name}</span>
                </div>
                <span className="text-textBlackColor text-[16px] font-[500]">
                  {user.jobTitle}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ReviewCards;
