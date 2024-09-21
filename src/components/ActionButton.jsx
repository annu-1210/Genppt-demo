/* eslint-disable react/prop-types */
import { tv } from "tailwind-variants";

const button = tv(
  {
    base: "rounded-full font-medium border duration-300 font-elzaMedium text-center flex items-center justify-center",
    variants: {
      color: {
        primary:
          "bg-black text-textWhiteColor border-black hover:bg-white hover:text-black",
        secondary:
          "bg-orange text-textWhiteColor border border-orange hover:bg-white hover:text-orange",
        teritary:
          "bg-white text-orange border border-orange hover:bg-orange hover:text-white",
      },
      size: {
        sm: "w-[110px] h-[35px] mobile:h-[38px] sm:w-[156px] sm:h-[42px] px-3 py-2 sm:px-3.5 sm:py-[7px] text-sm sm:text-base",
        md: "w-[144px] h-[48px] sm:w-[140px] sm:h-[48px] px-[25px] py-3.5 sm:px-[17px] sm:py-3 text-base sm:text-lg",
        lg: "w-[156px] h-[45px] sm:w-[168px] sm:h-[48px] px-[25px] py-[13px] sm:px-[17px] sm:py-3 text-base sm:text-xl",
        xl: "w-[165px] h-[45px] sm:w-[183px] sm:h-[48px] px-[22px] py-[13px] sm:px-[17px] sm:py-3 text-base sm:text-xl ",
        xxl: "w-[134px] h-[45px] sm:w-[195px] sm:h-[48px] py-3.5 px-[23px] sm:py-3 sm:px-[17px] text-base sm:text-xl",
      },
    },
  },
  {
    twMerge: false,
  }
);

const ActionButton = ({ mobileLabel, desktopLabel, color, size }) => {
  return (
    <div>
      <button className={button({ color, size })}>
        <span className="sm:hidden ">{mobileLabel}</span>
        <span className="hidden sm:inline">{desktopLabel}</span>
      </button>
    </div>
  );
};

export default ActionButton;
