import { Box, Flex, Heading, Text, Button } from "@chakra-ui/react";
import React from "react";

export default function Herosection() {
  return (
    <Box>
      <Flex h="100%">
        <Box
          w={{ base: "full", md: "50%" }}
          bgColor={{ base: "rgb(111,2,184)", md: "transparent" }}
          bgGradient={{
            base: "linear-gradient(159deg, rgba(111,2,184,1) 14%, rgba(134,1,135,1) 29%, rgba(0,0,0,1) 65%, rgba(0,0,0,1) 100%);",
            md: "none",
          }}
          textAlign={{ base: "center", md: "start" }}
          h="100%"
          py="70px"
        >
          <Flex alignItems="center" h="100%">
            <Box>
              <Heading color="#ffffff" fontSize="55px" fontWeight="800">
                {" "}
                Discover,
                <br /> Collect and Sell
                <br /> Dope{" "}
                <Text
                  as="span"
                  bgClip="text"
                  bgGradient="linear(to-l, #7928CA, #FF0080)"
                >
                  NFTs
                </Text>
              </Heading>
              <Text color="#828080" fontSize="12px" mt="25px">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Distinctio, nam laboriosam quisquam alias magni corrupti
                repellat ipsam velit laborum veniam reiciendis!
              </Text>
              <Flex mt="35px" justifyContent={{ base: "center", md: "start" }}>
                <Button
                  borderRadius="0px"
                  color="#fff"
                  border="1px solid transparent"
                  bgColor="rgb(139,0,231);"
                  bgGradient="linear-gradient(90deg, rgba(139,0,231,1) 5%, rgba(147,9,173,0.9920343137254902) 49%, rgba(233,10,206,1) 100%)"
                >
                  {" "}
                  Sign in
                </Button>
                <Button
                  ml="15px"
                  bgColor="transparent"
                  _hover={{
                    bgColor: "transparent",
                    bgGradient: "none",
                  }}
                  border="1px solid rgb(139,0,231) "
                  borderRadius="0px"
                  color="#ffffff"
                >
                  {" "}
                  Log in
                </Button>
              </Flex>
            </Box>
          </Flex>
        </Box>
        <Box
          w={{ base: "0", md: "50%" }}
          display={{ base: "none", md: "block" }}
          bgImage="./human.png"
          bgPos="center"
          bgRepeat="no-repeat"
          bgSize="auto"
        ></Box>
      </Flex>
    </Box>
  );
}
