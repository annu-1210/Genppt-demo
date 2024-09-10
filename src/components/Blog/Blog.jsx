import BlogBox from "./BlogBox/BlogBox";
import Head from "./Head/Head";

function Blog() {
  return (
    <div className="relative top-[70px] lg:h-[800px] xl:h-[820px] flex flex-col py-[60px] gap-16 items-center w-[100%] ">
      <div className="w-[100%]">
        <Head />
      </div>
      <div className="w-[100%] flex justify-start items-start ">
        <BlogBox />
      </div>
      <div className="w-[183px] h-[48px] flex justify-center items-center mt-5 ">
        <button className=" bg-white w-[183px] h-[48px] rounded-[60px] py-[10px] px-[17px] font-Elza font-medium text-xl  text-orange border border-orange  hover:bg-orange hover:text-textWhiteColor ">
        View all posts
        </button>
      </div>
    </div>
  );
}

export default Blog;
