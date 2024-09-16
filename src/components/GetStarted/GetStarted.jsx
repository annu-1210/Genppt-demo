import Head from "./Head";

function GetStarted() {
  return (
    <section className="pt-8 mx-auto ">
      <div className="container px-0 mx-auto md:px-3">
        <Head />
        <div className="relative pt-16 md:pt-24">
          <img src="./Images/bg-ellipse-2.png" alt="yellow-circle" className="absolute bottom-0 left-1/2 -translate-x-1/2 z-[-1]"/>
          <div className="relative flex z-1 ">
            <img src="./Images/get-started-img.png" alt="getstarted-img" className=""/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GetStarted;
