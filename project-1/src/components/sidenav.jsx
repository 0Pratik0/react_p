import React from "react";
import { Box, HStack, Stack, Icon, Text, Heading } from "@chakra-ui/react";
import { RxDashboard } from "react-icons/rx";
import { BsArrowDownUp } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { Link } from "react-router-dom";
const Sidenav = () => {
  const navLinks = [
    { icon: RxDashboard, text: "Dashboard", link: "/" },
    { icon: BsArrowDownUp, text: "Transactions", link: "/transactions" },
  ]; //creating array for dashboard and transaction
  return (
    <Stack
      bg="white"
      justify="space-between"
      boxShadow={{
        base: "none",
        lg: "lg",
      }}
      w={{
        base: "full",
        lg: "16rem",
      }}
      h="100vh"
    >
      <Box>
        <Heading textAlign="Center" fontSize="20px" as="h1" pt="56px">
          FirstProject
        </Heading>
        <Box mt="6" mx="3">
          {navLinks.map((nav) => (
            <Link to={nav.link} key={nav.text}>
              <HStack
                borderRadius="10px"
                py="3"
                px="4"
                _hover={{
                  bg: "#F3F3F7",
                  color: "#171717",
                  fontWeight: "medium",
                }}
                color="#797E82"
              >
                <Icon as={nav.icon} />
                <Text fontSize="14px">{nav.text}</Text>
              </HStack>
            </Link>
          ))}
        </Box>
      </Box>
      <Box mt="6" mx="3" mb="6">
        <Link to="/support">
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
        </Link>
      </Box>
    </Stack>
  );
};

export default Sidenav;
