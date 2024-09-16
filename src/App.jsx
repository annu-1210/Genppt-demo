import Footer from "./components/Footer.jsx";
import Blog from "./components/Blog/Blog.jsx";
import GetStarted from "./components/GetStarted/GetStarted.jsx";
import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import HowItWorks from "./components/HowItWorks/HowItWorks.jsx";
import Pricing from "./components/Pricing/Pricing.jsx";
import Reviews from "./components/Reviews/Reviews.jsx";
import Stats from "./components/Stats.jsx";
import Templates from "./components/Templates/Templates.jsx";
import UseCases from "./components/UseCases/UseCases.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Stats />
      <HowItWorks />
      <UseCases />
      <Templates />
      <Reviews />
      <Pricing />
      <Blog />
      <GetStarted />
      <Footer />
    </>
  );
}

export default App;
