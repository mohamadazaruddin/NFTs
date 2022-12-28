import { Box, Text, Heading, Image, Spacer, Link } from "@chakra-ui/react";
import { Grid, GridItem, Flex, Button } from "@chakra-ui/react";
import React from "react";
export default function TreningAuction() {
  const trends = [
    {
      img: "/nft1.jpg",
      title: "Thug Monkey",
      price: "20 ETH",
      time: "15h:16m:35s",
      creator: "Alexander",
    },
    {
      img: "/nft2.jpg",
      title: "Broken Face",
      price: "20 ETH",
      time: "8h:6m:45s",
      creator: "Wednesday Adams",
    },
    {
      img: "nft6.jpg",
      title: "Leo Messi",
      price: "20 ETH",
      time: "12h:46m:35s",
      creator: "Emily Wills",
    },
  ];
  return (
    <Box py="40px" w="90%" m="auto">
      <Flex justifyContent="space-between" alignItems="center">
        <Heading color="#fff" fontSize="30px">
          Trending Auction
        </Heading>
        <Link href="/Trends">view all</Link>
      </Flex>
      <Text color="#828080" fontSize="12px" mt="15px">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, facere
        recusandae animi eius dicta doloribus aperiam,
      </Text>
      <Box h="100%" w="100%" mt="40px">
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
          gap={6}
        >
          {trends.map((trend, i) => (
            <GridItem w="100%">
              <Box
                p="10px 15px"
                border="1px solid #8b00e745"
                transition="0.2s linear"
                _hover={{ transform: "scale(1.05)", borderColor: "#fff" }}
              >
                <Heading fontSize="18px" mt="10px">
                  {trend.title}
                </Heading>
                <Image
                  src={trend.img}
                  h={{ base: "250px", md: "250px" }}
                  w="100%"
                  mt="10px"
                />
                <Flex mt="10px">
                  <Box>
                    {trend.time}
                    <Text color="#828080" fontSize="12px">
                      Creator
                    </Text>
                  </Box>
                  <Spacer />
                  <Box>
                    {trend.price}
                    <Text color="#828080" fontSize="12px">
                      {trend.creator}
                    </Text>
                  </Box>
                </Flex>
                <Button
                  w="full"
                  bgColor="#fff"
                  color="#000"
                  fontSize="16px"
                  borderRadius={0}
                  fontWeight="normal"
                  mt="15px"
                >
                  Buy Now
                </Button>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
