import Head from "./Head";
import ReviewCards from "./ReviewCards";

function Reviews() {
  return (
    <section className="max-w-[1440px] mobile:pt-24 relative mx-auto bottom-0 bg-bottom bg-no-repeat  bg-ellipse">
      <div className="container flex flex-col items-center justify-center gap-12 mx-auto py-14 mobile:py-20">
        <Head />
        <ReviewCards />
      </div>
    </section>
  );
}

export default Reviews;
