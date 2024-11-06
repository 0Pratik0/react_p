import { HStack, Stack, Text, Icon, Tag, Button } from "@chakra-ui/react";
import React from "react";
import {
  AiOutlineArrowDown,
  AiOutlineArrowUp,
  AiOutlineInfoCircle,
} from "react-icons/ai";
const PortfolioSection = () => {
  return (
    <HStack
      bg="white"
      borderRadius="xl"
      p="6"
      spacing={{
        base: "4",
        xl: "16",
      }}
      flexDir={{
        base: "column",
        xl: "row",
      }}
      align={{
        base: "flex-start",
        xl: "center",
      }}
    >
      <Stack>
        <HStack color="black.80">
          <Text fontSize="sm"> Total Portfolio Value</Text>
          <Icon as={AiOutlineInfoCircle} />
        </HStack>
        <Text textStyle="h2">112,000.11</Text>
      </Stack>
      <Stack>
        <HStack color="black.80">
          <Text fontSize="sm"> Wallet Balances</Text>
        </HStack>
        <HStack
          spacing={2}
          flexDir={{
            base: "column",
            sm: "row",
          }}
          align={{
            base: "flex-start",
            sm: "center",
          }}
        >
          <HStack>
            <Text textStyle="h2">22.398000</Text>
            <Tag>BTC</Tag>
          </HStack>
          <HStack>
            <Text textStyle="h2">Rs 1,300.00</Text>
            <Tag>NRP</Tag>
          </HStack>
        </HStack>
      </Stack>
      <HStack spacing={3}>
        <Button leftIcon={<Icon as={AiOutlineArrowDown} />}>Deposit</Button>
        <Button leftIcon={<Icon as={AiOutlineArrowUp} />}>Withdraw</Button>
      </HStack>
    </HStack>
  );
};

export default PortfolioSection;
