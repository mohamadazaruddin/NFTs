import { Box, Heading, Text, Button, Grid, GridItem } from "@chakra-ui/react";
import React from "react";

export default function Works() {
  const workData = [
    {
      head: "Set up Your Wallet",
      title:
        "lorem ipsum sita eflegfnmfgh lorem ipsum sita eflegfnmfgh lorem ipsum sita eflegfnmfgh",
      icon: <i class="fa-solid fa-star"></i>,
    },
    {
      head: "Buy Your Collection",
      title:
        "lorem ipsum sita eflegfnmfgh lorem ipsum sita eflegfnmfgh lorem ipsum sita eflegfnmfgh",
      icon: <i class="fa-solid fa-camera-retro"></i>,
    },
    {
      head: "Sell Your NFTs",
      title:
        "lorem ipsum sita eflegfnmfgh lorem ipsum sita eflegfnmfgh lorem ipsum sita eflegfnmfgh",
      icon: <i class="fa-solid fa-ghost"></i>,
    },
    {
      head: "Add Your Nfts",
      title:
        "lorem ipsum sita eflegfnmfgh lorem ipsum sita eflegfnmfgh lorem ipsum sita eflegfnmfgh",
      icon: <i class="fa-solid fa-gift"></i>,
    },
  ];
  return (
    <Box py="40px" w="90%" m="auto">
      <Box
        alignItems="center"
        display={{ base: "block", md: "flex" }}
        justifyContent="space-between"
      >
        <Box
          w={{ base: "100%", md: "40%" }}
          pr="40px"
          textAlign={{ base: "center", md: "start" }}
        >
          <Heading color="#fff" fontSize="30px">
            How it Works
          </Heading>
          <Text color="#828080" fontSize="12px" mt="15px">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
            facere recusandae animi eius dicta doloribus aperiam,{" "}
          </Text>
          <Button
            borderRadius="0px"
            mt="15px"
            border="1px solid transparent"
            bgColor="rgb(139,0,231);"
            bgGradient="linear-gradient(90deg, rgba(139,0,231,1) 5%, rgba(147,9,173,0.9920343137254902) 49%, rgba(233,10,206,1) 100%)"
          >
            {" "}
            Sign in
          </Button>
        </Box>
        <Box w={{ base: "100%", md: "60%" }} mt={{ base: "25px", md: "0" }}>
          <Grid templateColumns="repeat(2, 1fr)" gap={6}>
            {workData.map((data, i) => (
              <GridItem key={i} w="100%" p="15px" border="1px solid #8b00e745">
                <Box>
                  <Box
                    color="#c3d7e9a6"
                    w="30px"
                    h="30px"
                    bgColor="#8a3ec885"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    {data.icon}
                  </Box>
                  <Heading color="#fff" fontSize="18px" mt="15px">
                    {data.head}
                  </Heading>
                  <Text color="#828080" fontSize="12px" mt="8px">
                    {data.title}
                  </Text>
                </Box>
              </GridItem>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
