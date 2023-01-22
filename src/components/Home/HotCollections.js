import { Grid, GridItem, Flex, Button } from "@chakra-ui/react";
import { Box, Heading, Text, Image, Spacer, Link } from "@chakra-ui/react";
import React from "react";

export default function HotCollections() {
  const trends = [
    {
      img: "/skullcollection.png",
      title: "Thug Monkey",
      price: "20 ETH",
      time: "15h:16m:35s",
      creator: "Alexander",
    },
    {
      img: "/monkeycollection.png",
      title: "Broken Face",
      price: "20 ETH",
      time: "8h:6m:45s",
      creator: "Wednesday Adams",
    },
    {
      img: "/spacecollection.png",
      title: "Leo Messi",
      price: "20 ETH",
      time: "12h:46m:35s",
      creator: "Emily Wills",
    },
    {
      img: "/facecollection.png",
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
          Hot Collection
        </Heading>
        <Link href="/Trends" color="#fff">
          view all
        </Link>
      </Flex>
      <Text color="#828080" fontSize="12px" mt="15px">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, facere
        recusandae animi eius dicta doloribus aperiam,
      </Text>
      <Box h="100%" w="100%" mt="40px">
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(4, 1fr)" }}
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
                <Image
                  src={trend.img}
                  h={{ base: "350px", md: "350px" }}
                  w="100%"
                />
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
