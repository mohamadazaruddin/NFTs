import { Box, Heading, Text, Flex, Link } from "@chakra-ui/react";
import React from "react";

export default function HotCollections() {
  return (
    <Box py="40px" w="90%" m="auto">
      <Flex justifyContent="space-between" alignItems="center">
        <Heading color="#fff" fontSize="30px">
          Hot Collection
        </Heading>
        <Link href="/Trends">view all</Link>
      </Flex>
      <Text color="#828080" fontSize="12px" mt="15px">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, facere
        recusandae animi eius dicta doloribus aperiam,
      </Text>
      <Box></Box>
    </Box>
  );
}
