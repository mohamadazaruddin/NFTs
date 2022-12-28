import { Box } from "@chakra-ui/react";
import React from "react";
import Navbar from "../components/Navbar";
import Herosection from "../components/Home/Herosection";
import Sponsers from "../components/Home/Sponsers";
import Works from "../components/Home/Works";
import TreningAuction from "../components/Home/TreningAuction";
// import Stocks from "../components/Home/Stocks";
import TopSellers from "../components/Home/TopSellers";
import Footer from "../components/Footer";
import HotCollections from "../components/Home/HotCollections";
export default function Home() {
  return (
    <Box
      bgColor="#091027"
      // bgGradient="linear-gradient(90deg, rgba(7,18,45,1) 5%, rgba(10,26,65,0.9920343137254902) 49%, rgba(8,22,55,1) 100%);"
    >
      <Box h="100%">
        <Box w={{ base: "full", md: "90%" }} m="auto">
          <Navbar />
          <Herosection />
        </Box>
        <Box bgColor="#110229">
          <Sponsers />
          <Works />
          <TreningAuction />
          <TopSellers />
          {/* <Stocks /> */}
          <HotCollections />
          <Footer />
        </Box>
      </Box>
    </Box>
  );
}
