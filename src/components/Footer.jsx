const FooterData = [
  {
    id: 1,
    title: "Product",
    list: {
      list1: "GenPPT",
      list2: "Blog",
      list3: "Contact",
    },
  },
  {
    id: 2,
    title: "Legal",
    list: {
      list1: "Privacy Policy",
      list2: "Terms",
    },
  },
  {
    id: 3,
    title: "More",
    list: {
      list1: "EnvLock",
    },
  },
];

function Footer() {
  return (
    <footer className="relative z-20 py-10 mx-auto bg-Footerbg">
      <div className="container flex flex-col justify-between gap-12 px-5 mx-auto mobile:gap-0 md:flex-row ">
        <a className="flex items-center gap-1 w-[155px] h-[29px] " href="/">
          <img
            src="./Images/genppt-logo-white.png"
            alt="Genppt-logo"
            width={29}
            className="w-[18px] mobile:w-[29px]"
          />
          <p className="text-white w-[81px] font-elzaMedium text-base mobile:text-[22px]">
            GenPPT
          </p>
        </a>
        <div className="flex gap-[65px] mobile:gap-[50px] sm:gap-[70px] md:gap-[36px] lg:gap-[60px] flex-wrap">
          {FooterData.map((data) => {
            return (
              <div
                key={data.id}
                className="max-x-[120px] max-h-[119px] flex flex-col gap-[10px] md:gap-[8px] lg:gap-[13px] items-start"
              >
                <h6 className="text-white text-[20px] font-medium">
                  {data.title}
                </h6>
                <ul className="flex flex-col gap-2 font-Elza hover:cursor-pointer">
                  <li className=" underline-animation after:border-white footerList">
                    {data.list.list1}
                  </li>
                  <li className="footerList underline-animation after:border-white">
                    {data.list.list2}
                  </li>
                  <li className="footerList underline-animation after:border-white">
                    {data.list.list3}
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
        <div className="text-[18px] text-FooterTextColor font-elzaNormal">
          <span>© 2024 GenPPT</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
