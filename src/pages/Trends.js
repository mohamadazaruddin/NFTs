import { Box } from "@chakra-ui/react";
import React from "react";
import Cards from "../components/Trending/Cards";
import { nftData } from "../data";
export default function Trends() {
  return (
    <Box bgColor="#110229" h="100vh" overflowY="auto" px="25px">
      <Cards data={nftData} />
    </Box>
  );
}
