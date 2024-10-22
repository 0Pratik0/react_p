import React from "react";
import { Box, HStack, Stack, Icon, Text, Heading } from "@chakra-ui/react";
import { RxDashboard } from "react-icons/rx";
import { BsArrowDownUp } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
const Sidenav = () => {
  const navLinks = [
    { icon: RxDashboard, text: "Dashboard", link: "/" },
    { icon: BsArrowDownUp, text: "Transactions", link: "/transactions" },
  ]; //creating array for dashboard and transaction
  return (
    <Stack justify="space-between" boxShadow="lg" maxW="16rem" h="100vh">
      <Box>
        <Heading textAlign="Center" fontSize="20px" as="h1" pt="56px">
          FirstProject
        </Heading>
        <Box mt="6" mx="3">
          {navLinks.map((nav) => (
            <HStack
              key={nav.text}
              borderRadius="10px"
              py="3"
              px="4"
              _hover={{ bg: "#F3F3F7", color: "#171717", fontWeight: "medium" }}
              color="#797E82"
            >
              <Icon as={nav.icon} />
              <Text fontSize="14px">{nav.text}</Text>
            </HStack>
          ))}
        </Box>
      </Box>
      <Box mt="6" mx="3" mb="6">
        <HStack
          borderRadius="10px"
          py="3"
          px="4"
          _hover={{ bg: "#F3F3F7", color: "#171717", fontWeight: "medium" }}
          color="#797E82"
        >
          <Icon as={BiSupport} />
          <Text fontSize="14px">support</Text>
        </HStack>
      </Box>
    </Stack>
  );
};

export default Sidenav;
