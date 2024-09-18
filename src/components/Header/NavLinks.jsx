function NavLinks() {
  return (
    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-start sm:items-center font-elzaNormal text-[17px] cursor-pointer text-black">
      <a href="/" className="underline-animation">
        Templates
      </a>
      <a href="/" className="underline-animation">
        Features
      </a>
      <a href="/" className="underline-animation">
        Pricing
      </a>
      <a href="/" className="underline-animation">
        Sign in
      </a>
    </div>
  );
}

export default NavLinks;
