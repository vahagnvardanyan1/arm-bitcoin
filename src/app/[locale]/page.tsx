import Box from "@mui/material/Box";

import { Calculator } from "@/components/Calculator";
import { CryptoTicker } from "@/components/CryptoTicker";
import { ExchangeDashboard } from "@/components/ExchangeDashboard";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { NewsBanner } from "@/components/NewsBanner";
import { WhyChooseUs } from "@/components/WhyChooseUs";

const HomePage = () => (
  <Box component="main">
    <Hero />
    <CryptoTicker />
    <ExchangeDashboard />
    <Calculator />
    <NewsBanner />
    <WhyChooseUs />
    <Faq />
    <Footer />
  </Box>
);

export default HomePage;
