import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import NavLinks from "./NavLinks";
import { RxCross2 } from "react-icons/rx";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <section className="navbar">
        <nav className="flex justify-between h-[42px] w-[90%] items-center relative top-8 left-[28px] md:left-[50px] right-[51px]  font-Elza ">
          <div className="flex gap-1 w-[155px] h-[29px] items-center">
            <img src="./logo-Genppt.png" alt="Genppt-logo" width={29} />
            <span className="text-black w-[81px] font-medium text-[22px]">
              GenPPT
            </span>
          </div>
          <div className="flex gap-2 w-[510px] h-[42px] items-center justify-end md:justify-center">
            <div className="hidden md:inline-block w-[330px] h-[20px]">
              <NavLinks />
            </div>
            <div>
              <button className="bg-black hidden  rounded-[60px] px-3.5 py-2.5 text-textWhiteColor md:flex justify-center items-center font-medium text-lg w-[162px] h-[42px] border border-black  hover:bg-white hover:text-black">
                Start generating
              </button>
            </div>
            <div>
              <button className="bg-black rounded-[60px] px-3 py-2 text-textWhiteColor flex md:hidden justify-center items-center font-medium text-sm w-[114px] h-[40px] border border-black  hover:bg-white hover:text-black">
                Get started
              </button>
            </div>
            <div className="flex ml-3 md:hidden">
              <button onClick={toggleNav}>
                <IoMenu size={36} />
              </button>
            </div>
          </div>
        </nav>
        {isOpen && (
          <div className="fixed md:hidden flex flex-col border z-10 bg-white font-Elza text-textBlackColor top-20 right-[12px] rounded-md border-textBlackColor w-[170px] h-[181px] py-4 px-4">
            <div className="relative top-0 left-28">
              <button onClick={toggleNav}>
                <RxCross2 size={24} />
              </button>
            </div>
            <div className="flex justify-start ">
              <NavLinks />
            </div>
          </div>
        )}
      </section>
    </>
  );
}

export default Header;
