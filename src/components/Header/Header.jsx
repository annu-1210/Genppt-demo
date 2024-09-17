import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import NavLinks from "./NavLinks";
import { RxCross2 } from "react-icons/rx";
import ActionButton from "../ActionButton";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="relative z-30 w-full overflow-hidden ">
        <div className="container flex items-center justify-between px-3 py-5 mx-auto md:py-6 ">
          <a className="flex items-center gap-1 w-[155px] h-[29px]" href="/">
            <img
              src="./Images/genppt-logo.png"
              alt="Genppt-logo"
              width={29}
              className="w-[18px] mobile:w-[29px]"
            />
            <p className="text-black w-[81px] font-elzaMedium text-[17px] mobile:text-[22px]">
              GenPPT
            </p>
          </a>
          <div className="flex items-center justify-end w-[550px] h-[42px] ">
            <div className="hidden md:inline-block ">
              <NavLinks />
            </div>
            <ActionButton
              desktop="Start generating"
              mobile="Get started"
              color="primary"
              size="sm"
            />
            <div className="flex ml-3 md:hidden w-[28px] mobile:w-[36px]">
              <IoMenu size={36} onClick={toggleNav} />
            </div>
          </div>
        </div>
      </nav>
      {isOpen && (
        <div className="fixed md:hidden flex flex-col border z-10 bg-white font-elzaMedium text-textBlackColor top-20 right-[12px] rounded-md border-textBlackColor w-[170px] h-[181px] py-4 px-4">
          <div className="relative top-0 left-28">
            <RxCross2 size={24} onClick={toggleNav} />
          </div>
          <div className="flex justify-start ">
            <NavLinks />
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
