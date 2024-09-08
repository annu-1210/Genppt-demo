// import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import HowItWorks from "./components/HowItWorks/HowItWorks.jsx";
import Stats from "./components/Stats/Stats.jsx";
import UseCases from "./components/UseCases/UseCases.jsx";
function App() {
  return (
    <>
      <Header />
      <div>
        <Hero />
        <Stats />
        <HowItWorks />
        <UseCases/>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default App;
