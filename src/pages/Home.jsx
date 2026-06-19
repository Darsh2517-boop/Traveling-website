import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Destinations from "../components/Destinations";
import PackageCard from "../components/PackageCard";
import WhyUs from "../components/WhyUs";
import Reviews from "../components/Reviews";
import Enquiry from "../components/Enquiry";
import Footer from "../components/Footer";


function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Destinations />
      <PackageCard />
      <WhyUs />
      <Reviews />
      <Enquiry />
      <Footer />
    </>
  );
}

export default Home;