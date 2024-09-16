import ActionButton from "../ActionButton";
import BlogBox from "./BlogBox";
import Head from "./Head";

function Blog() {
  return (
    <section className="relative pt-[38px] pb-5 md:py-16 mx-auto">
      <div className="container flex flex-col gap-6 px-0 mx-auto mobile:gap-10 md:px-3">
        <Head />
        <BlogBox />
        <div className="w-full h-[48px] flex justify-center items-center mt-5 ">
          <ActionButton
            desktop="View all posts"
            mobile="View all posts"
            color="teritary"
            size="lg"
          />
        </div>
      </div>
    </section>
  );
}

export default Blog;
