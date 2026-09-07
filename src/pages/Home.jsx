import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import HowItWorks from "../components/HowItWorks";
import CTABanner from "../components/CTABanner";
import TrustStrip from "../components/TrustStrip";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <HowItWorks />
      <CTABanner />
      <TrustStrip />
      <Footer />
    </>
  );
}

export default Home;