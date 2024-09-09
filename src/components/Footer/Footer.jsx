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
    <div className="relative top-[307px] bg-Footerbg h-[332px] md:h-[220px] w-[100%] ">
      <div className="absolute top-[41px] left-[50px] flex gap-[305px] h-[332px] md:h-[150px]">
        <div>
          <img src="./logo.png" alt="logo" />
        </div>
        <div className="flex gap-[76px]">
          {FooterData.map((data) => {
            return (
              <div
                key={data.id}
                className="max-x-[120px] max-h-[119px] flex flex-col gap-[13px] items-start"
              >
                <div className="text-white text-[20px] font-medium">
                  <span>{data.title}</span>
                </div>
                <div className="flex flex-col gap-2 font-Elza">
                  <span className="text-[18px] text-FooterTextColor">
                    {data.list.list1}
                  </span>
                  <span className="text-[18px] text-FooterTextColor">
                    {data.list.list2}
                  </span>
                  <span className="text-[18px] text-FooterTextColor">
                    {data.list.list3}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="text-[18px] text-FooterTextColor font-Elza">
          <span>© 2024 GenPPT</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
