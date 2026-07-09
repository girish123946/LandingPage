import Hero from "../../components/Hero/Hero";
import SearchSection from "../../components/SearchSection/SearchSection";
import ServiceCards from "../../components/ServiceCards/ServiceCards";
import Ecosystem from "../../components/Ecosystem/Ecosystem";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import StatsSection from "../../components/StatsSection/StatsSection";
import Testimonials from "../../components/Testimonials/Testimonials";
import CTASection from "../../components/CTASection/CTASection";
import Footer from "../../components/Footer/Footer";

import "./Home.scss";

function Home() {
  return (
    <div className="home">

      {/* Hero Section */}
      <Hero />

      {/* Search Section */}
      <SearchSection />

      {/* Service Cards */}
      <ServiceCards />

      {/* Healthcare Ecosystem */}
      <Ecosystem />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Statistics Section */}
      <StatsSection />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Call To Action Section */}
      <CTASection />

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default Home;