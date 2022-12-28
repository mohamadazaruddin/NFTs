import {
  Box,
  Text,
  Heading,
  Grid,
  GridItem,
  Image,
  Flex,
  Link,
} from "@chakra-ui/react";
import React from "react";

export default function TopSellers() {
  const sellerDetails = [
    { name: "Alex Mervick", avatar: "./avatar.png", artcount: "250 artworks" },
    { name: "Benjamin", avatar: "./avatar.png", artcount: "400 artworks" },
    {
      name: "Kingston",
      avatar: "./femaleavatar.png",
      artcount: "350 artworks",
    },
    {
      name: "Benjamin",
      avatar: "./avatar.png",
      artcount: "400 artworks",
    },
    {
      name: "Kingston",
      avatar: "./femaleavatar.png",
      artcount: "350 artworks",
    },
    { name: "Alex Mervick", avatar: "./avatar.png", artcount: "250 artworks" },
  ];
  return (
    <Box py="40px" w="90%" m="auto">
      <Flex justifyContent="space-between" alignItems="center">
        <Heading color="#fff" fontSize="30px">
          Top Sellers
        </Heading>
        <Link href="/Trends">view all</Link>
      </Flex>
      <Box h="100%" w="100%" mt="40px">
        <Grid
          templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }}
          gap={6}
        >
          {sellerDetails.map((seller, i) => (
            <GridItem w="100%">
              <Flex
                alignItems="center"
                p={{ base: "8px", md: "10px 15px" }}
                bgColor="rgb(139,0,231)"
                bgGradient="linear-gradient(90deg, rgba(139,0,231,1) 5%, rgba(147,9,173,0.9920343137254902) 49%, rgba(233,10,206,1) 100%)"
                borderRadius="6px"
              >
                <Box>
                  <Image
                    src={seller.avatar}
                    w={{ base: "35px", md: "75px" }}
                    h={{ base: "35px", md: "75px" }}
                  />
                </Box>
                <Box
                  ml="15px"
                  fontSize={{ base: "14px", md: "18px" }}
                  color="#fff"
                >
                  {seller.name}
                  <Text color="#000555" fontSize="12px">
                    {seller.artcount}
                  </Text>
                </Box>
              </Flex>
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
