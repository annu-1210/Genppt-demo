function Header() {
  return (
    <>
      <section className="navbar">
        <div className="flex justify-between h-[42px] w-[1299px] items-center relative top-8 left-[50px] right-[51px]  font-Elza">
          <div className="flex gap-1 w-[155px] h-[29px] items-center">
            <img src="./logo-Genppt.png" alt="Genppt-logo" width={29} />
            <span className="text-black w-[81px] font-medium text-[22px]">
              GenPPT
            </span>
          </div>
          <div className="flex gap-2 w-[510px] h-[42px] items-center">
            <ul className="flex gap-[18px] w-[330px] h-[20px] items-center font-normal text-[17px] cursor-pointer">
              <li className="w-[77px]">Templates</li>
              <li className="w-[65px]">Features</li>
              <li className="w-[51px]">Pricing</li>
              <li className="w-[59px] ">Sign in</li>
            </ul>
            <button className="bg-black rounded-[60px] px-3.5 py-2.5 text-textWhiteColor flex justify-center items-center font-medium text-lg w-[162px] h-[42px] border border-black  hover:bg-white hover:text-black">
              Start generating
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
