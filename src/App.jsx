import About from "./components/About";
import ScrollToTopButton from "./components/Common/ScrollToTopButton";
import Contact from "./components/Contact";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HowWorks from "./components/HowWorks";
import Navbar from "./components/Navbar";
import OurServics from "./components/OurServics";
import SafeDelivery from "./components/SafeDelivery";

const App = () => {
  return (
    <div className="px-2 md:px-0">
      <Navbar />
      <Hero />
      <About />
      <HowWorks />
      <OurServics />
      <SafeDelivery />
      <Faq />
      <Contact />
      <Footer />

      {/* Scroll top  */}
        <ScrollToTopButton />
    </div>
  );
};

export default App;