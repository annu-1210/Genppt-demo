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
    <div className="w-[100%] flex justify-center flex-wrap gap-[22px]">
      {BlogData.map((blog) => {
        return (
          <div
            className="bg-gradient-to-r from-CardGradient1 to-CardGradient2 rounded-[7px] border w-[436px] h-[344px] py-5 px-5"
            key={blog.id}
          >
            <div className="flex flex-col gap-4">
              <div className="w-[393px] h-[221px]">
                <img src={blog.image} alt="blog" />
              </div>
              <div className="text-[25px] leading-[30px] font-medium text-wrap">
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
