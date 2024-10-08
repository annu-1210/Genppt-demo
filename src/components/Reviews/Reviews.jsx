import Head from "./Head";
import ReviewCards from "./ReviewCards";

function Reviews() {
  return (
    <section className="max-w-[1440px] xsm:pt-24 relative mx-auto bg-bottom bg-no-repeat  bg-ellipse overflow-hidden">
      <div className="container flex flex-col items-center justify-center gap-12 mx-auto py-14 xsm:py-20">
        <Head />
        <ReviewCards />
      </div>
    </section>
  );
}

export default Reviews;
