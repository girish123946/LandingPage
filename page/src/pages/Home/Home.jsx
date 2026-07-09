import Hero from "../../components/Hero/Hero";
import SearchSection from "../../components/SearchSection/SearchSection";
import ServiceCards from "../../components/ServiceCards/ServiceCards";
import Ecosystem from "../../components/Ecosystem/Ecosystem";

import "./Home.scss";

function Home() {
  return (
    <div className="home">
      <Hero />
      <SearchSection />
      <ServiceCards />
      <Ecosystem />
    </div>
  );
}

export default Home;