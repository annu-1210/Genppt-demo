import img_1 from "../../../assets/image 14.png";
import img_2 from "../../../assets/image 14-2.png";
import img_3 from "../../../assets/image 14-3.png";

const BlogData = [
  {
    id: 1,
    image: img_1,
    text: "How to Pitch to Investors",
  },
  {
    id: 2,
    image: img_2,
    text: "5 Effective Teaching Styles: Pros and Cons of Each",
  },
  {
    id: 3,
    image: img_3,
    text: "How to Edit a PowerPoint Template: A Step-by-Step Guide",
  },
];

function BlogBox() {
  return (
    <div className="w-[100%] flex items-center justify-center flex-wrap gap-10 md:gap-[10px] lg:gap-[13px] xl:gap-[18px] laptop:gap-[22px]">
      {BlogData.map((blog) => {
        return (
          <div
            className="bg-gradient-to-r from-CardGradient1 to-CardGradient2 rounded-[7px] border w-[90%] sm:w-[60%] md:w-[300px] lg:w-[300px] xl:-w-[390px] laptop:w-[436px] mobile:h-[320px] sm:h-[300px] md:h-[260px] lg:h-[290px] xl:h-[320px] laptop:h-[344px]  py-5 px-5"
            key={blog.id}
          >
            <div className="flex flex-col gap-4">
              <div className=" laptop:w-[393px] laptop:h-[221px]">
                <img src={blog.image} alt="blog" />
              </div>
              <div className="lg:text-[22px] xl:text-[24px] laptop:text-[25px] lg:leading-[25px] laptop:leading-[30px] font-medium text-wrap text-center md:text-start">
                <span>{blog.text}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default BlogBox;
