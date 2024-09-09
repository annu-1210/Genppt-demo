import Head from "./Head/Head";
import ReviewCards from "./ReviewCards/ReviewCards";

function Reviews() {
  return (
    <div className="relative top-[270px] gap-12 flex flex-col justify-center items-center py-20 bg-no-repeat bg-bottom bg-ellipse">
      <div>
        <Head />
      </div>
      <div>
        <ReviewCards />
      </div>
    </div>
  );
}

export default Reviews;
