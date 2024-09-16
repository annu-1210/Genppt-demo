function NavLinks() {
  return (
    <>
      <div className="w-[330px] h-[20px} flex flex-col sm:flex-row gap-2 sm:gap-[18px] items-start sm:items-center font-elzaNormal text-[17px] cursor-pointer ">
        <a href="/" className="w-[77px] underline-animation">
          Templates
        </a>
        <a href="/" className="w-[65px] underline-animation">
          Features
        </a>
        <a href="/" className="w-[51px] underline-animation">
          Pricing
        </a>
        <a href="/" className="w-[59px] underline-animation">
          Sign in
        </a>
      </div>
    </>
  );
}

export default NavLinks;
