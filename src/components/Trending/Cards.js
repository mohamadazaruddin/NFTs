import { Box, Text, Heading, Image, Spacer } from "@chakra-ui/react";
import { Grid, GridItem, Flex, Button } from "@chakra-ui/react";
import React from "react";

export default function Cards(props) {
  return (
    <Box color="#fff">
      <Box h="100%" w="100%" mt="40px">
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
          gap={6}
        >
          {props.data.map((trend, i) => (
            <GridItem w="100%">
              <Box
                p="10px 15px"
                border="1px solid #8b00e745"
                transition="0.2s linear"
                _hover={{ transform: "scale(1.05)", borderColor: "#fff" }}
              >
                <Heading fontSize="18px" mt="10px" color="#fff">
                  {trend.title}
                </Heading>
                <Image
                  src={trend.img}
                  h={{ base: "250px", md: "250px" }}
                  w="100%"
                  mt="10px"
                />
                <Flex mt="10px">
                  <Box color="#fff">
                    {trend.time}
                    <Text color="#828080" fontSize="12px">
                      Creator
                    </Text>
                  </Box>
                  <Spacer />
                  <Box color="#fff">
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
