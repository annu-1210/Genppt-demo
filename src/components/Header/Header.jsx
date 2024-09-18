import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import NavLinks from "./NavLinks";
import ActionButton from "../ActionButton";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <nav className="relative z-30 w-full overflow-hidden">
        <div className="container flex items-center justify-between px-3 py-5 mx-auto md:py-6">
          <a className="flex items-center gap-1 w-[155px] h-[29px]" href="/">
            <img
              src="./Images/genppt-logo.png"
              alt="GenPPT Logo"
              className="w-[18px] mobile:w-[29px]"
            />
            <p className="text-black w-[81px] font-elzaMedium text-[17px] mobile:text-[22px]">
              GenPPT
            </p>
          </a>

          <div className="flex items-center justify-end w-full max-w-[550px] mobile:gap-[31px]">
            <div className="hidden md:block">
              <NavLinks />
            </div>
            <ActionButton
              desktopLabel="Start generating"
              mobileLabel="Get started"
              color="primary"
              size="sm"
            />
            <div className="ml-3 md:hidden">
              <IoMenu
                size={36}
                onClick={toggleNav}
                aria-label="Open Menu"
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="fixed md:hidden flex flex-col items-start z-40 bg-white font-elzaMedium text-textBlackColor top-20 right-4 rounded-md border border-textBlackColor w-[170px] py-4 px-4">
          <div className="flex justify-end w-full">
            <RxCross2
              size={24}
              onClick={toggleNav}
              aria-label="Close Menu"
              className="cursor-pointer"
            />
          </div>
          <div className="mt-2">
            <NavLinks />
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
