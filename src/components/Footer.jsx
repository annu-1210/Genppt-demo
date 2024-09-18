const FooterData = [
  {
    id: 1,
    title: "Product",
    list: ["GenPPT", "Blog", "Contact"],
  },
  {
    id: 2,
    title: "Legal",
    list: ["Privacy Policy", "Terms"],
  },
  {
    id: 3,
    title: "More",
    list: ["EnvLock"],
  },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-20 py-10 mx-auto bg-Footerbg">
      <div className="container flex flex-col justify-between gap-12 px-5 mx-auto md:flex-row md:gap-0">
        <a className="flex items-center gap-1 w-[155px] h-[29px]" href="/">
          <img
            src="./Images/genppt-logo-white.png"
            alt="GenPPT Logo"
            width={29}
            className="w-[18px] md:w-[29px]"
          />
          <p className="text-white w-[81px] font-elzaMedium text-lg md:text-[22px]">
            GenPPT
          </p>
        </a>

        <div className="flex gap-[65px] flex-wrap mobile:gap-[50px] sm:gap-[70px] md:gap-[36px] lg:gap-[60px]">
          {FooterData.map((data) => (
            <div
              key={data.id}
              className="max-w-[120px] flex flex-col gap-[10px] md:gap-[8px] lg:gap-[13px]"
            >
              <h6 className="text-white text-[20px] font-medium">
                {data.title}
              </h6>
              <ul className="flex flex-col gap-2 cursor-pointer font-Elza">
                {data.list.map((item, index) => (
                  <li
                    key={index}
                    className="footerList underline-animation after:border-white"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-[18px] text-FooterTextColor font-elzaNormal">
          <p>&copy; {currentYear} GenPPT</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
