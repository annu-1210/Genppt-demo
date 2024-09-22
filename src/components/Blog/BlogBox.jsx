import img_1 from "../../assets/image 14.png";
import img_2 from "../../assets/image 14-2.png";
import img_3 from "../../assets/image 14-3.png";

const BlogData = [
  {
    id: 1,
    image: img_1,
    label: "How to Pitch to Investors",
  },
  {
    id: 2,
    image: img_2,
    label: "5 Effective Teaching Styles: Pros and Cons of Each",
  },
  {
    id: 3,
    image: img_3,
    label: "How to Edit a PowerPoint Template: A Step-by-Step Guide",
  },
];

function BlogBox() {
  return (
    <div className="flex flex-wrap justify-center gap-4 pt-5 xl:flex-nowrap md:gap-5 md:pt-10">
      {BlogData.map((blog) => (
        <div
          key={blog.id}
          className="bg-gradient-to-r from-CardGradient1 to-CardGradient2 rounded-[7px] border w-[90%] xsm:w-[60%] md:w-[340px] lg:w-[370px] xl:w-[425px] 2xl:w-[436px] h-[275px] sm:h-[300px] md:max-h-[320px] lg:h-[290px] xl:h-[320px] 2xl:h-[344px] py-5 px-5"
        >
          <div className="flex flex-col gap-4">
            <img
              src={blog.image}
              alt={blog.label}
              className="w-full h-auto rounded-lg"
            />
            <h3 className="text-[16px] xsm:text-[18px] xl:text-[22px] leading-5 xsm:leading-6 lg:leading-[25px] 2xl:leading-[30px] font-elzaMedium  text-start text-BoldBlack">
              {blog.label}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BlogBox;
