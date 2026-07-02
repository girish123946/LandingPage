import { Box } from "@mui/material";

import Hero from "../../components/Hero/Hero";
import TrustedCompanies from "../../components/TrustedCompanies/TrustedCompanies";
import Features from "../../components/Features/Features";
import Services from "../../components/Services/Services";
import Ecosystem from "../../components/Ecosystem/Ecosystem";

import "./Home.scss";

function Home() {
  return (
    <Box className="home-page">
      <Hero />

      <TrustedCompanies />

      <Features />

      <Services />

      <Ecosystem />
    </Box>
  );
}

export default Home;