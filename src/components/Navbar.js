import React from "react";
import {
  ListItem,
  Box,
  Flex,
  Link,
  OrderedList,
  Button,
  Image,
} from "@chakra-ui/react";
import { Show, Hide } from "@chakra-ui/react";
export default function Navbar() {
  return (
    <Box bgColor="#091027">
      <Box display={{ base: "block", md: "none" }}>
        <Box color={"#fff"}>
          This text appears at the "sm" value screen width or greater.
        </Box>
      </Box>
      <Hide below="md">
        <Flex p="10px 0px" justifyContent="space-between" alignItems="center">
          <Box color="#ffffff">
            <Image src="./NFT.png" w="50px" />
          </Box>

          <Box>
            <OrderedList listStyleType="none" display="flex" color="#fff">
              <ListItem>
                <Link
                  href="/trends"
                  _hover={{ textDecoration: "none" }}
                  p="10px 15px"
                  h="100%"
                >
                  Trends
                </Link>
                <Link
                  href="/Artists"
                  _hover={{ textDecoration: "none" }}
                  p="10px 15px"
                  h="100%"
                >
                  {" "}
                  Artists
                </Link>
                <Link
                  href="/Collections"
                  _hover={{ textDecoration: "none" }}
                  p="10px 15px"
                  h="100%"
                >
                  Collections
                </Link>
                <Link
                  href="/Wallet"
                  _hover={{ textDecoration: "none" }}
                  p="10px 15px"
                  h="100%"
                >
                  {" "}
                  Wallet
                </Link>
                <Button
                  mr="15px"
                  bgColor="transparent"
                  _hover={{
                    bgColor: "transparent",
                    bgGradient: "none",
                    border: "1px solid rgb(139,0,231) ",
                  }}
                  border="1px solid transparent"
                  borderRadius="0px"
                >
                  {" "}
                  Log in
                </Button>
                <Button
                  borderRadius="0px"
                  border="1px solid transparent"
                  bgColor="rgb(139,0,231);"
                  bgGradient="linear-gradient(90deg, rgba(139,0,231,1) 5%, rgba(147,9,173,0.9920343137254902) 49%, rgba(233,10,206,1) 100%)"
                >
                  {" "}
                  Sign in
                </Button>
              </ListItem>
            </OrderedList>
          </Box>
        </Flex>
      </Hide>
    </Box>
  );
}
