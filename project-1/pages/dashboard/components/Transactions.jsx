import React, { Fragment } from "react";
import { CustomCard } from "../../../src/chakra/CustomCard";
import {
  Stack,
  HStack,
  Text,
  Flex,
  Icon,
  Grid,
  Divider,
  Button,
} from "@chakra-ui/react";
import { TbCurrencyRupeeNepalese } from "react-icons/tb";
import { FaBtc } from "react-icons/fa";
const Transactions = () => {
  const transactions = [
    {
      id: "1",
      icon: TbCurrencyRupeeNepalese,
      text: "NRP Deposit",
      amount: "+ Rs81,233.02",
      timestamp: "2024-10-28 7:00am",
    },
    {
      id: "2",
      icon: FaBtc,
      text: "BTC Sell",
      amount: "- 23.674564 BTC",
      timestamp: "2024-10-28 7:00am",
    },
    {
      id: "3",
      icon: TbCurrencyRupeeNepalese,
      text: "NRP Deposit",
      amount: "+ Rs21,937.82",
      timestamp: "2024-10-28 7:00am",
    },
  ];
  return (
    <CustomCard h="full">
      <Stack spacing={4}>
        <HStack>
          <Text mb="3" fontSize="sm" color="black.80">
            Recent Transactions
          </Text>
        </HStack>
        {transactions.map((transaction, i) => (
          <Fragment key={transaction.id}>
            {i != 0 && <Divider />}
            <Flex gap="4">
              <Grid
                placeItems="center"
                bg="black.5"
                boxSize={10}
                borderRadius="full"
              >
                <Icon as={transaction.icon}></Icon>
              </Grid>
              <Flex justify="space-between" w="full">
                <Stack spacing={0}>
                  <Text textStyle="h6">{transaction.text}</Text>

                  <Text fontSize="sm" color="black.40">
                    {transaction.timestamp}
                  </Text>
                </Stack>
                <Text textStyle="h6">{transaction.amount}</Text>
              </Flex>
            </Flex>
          </Fragment>
        ))}
      </Stack>
      <Button w="full" mt="6" colorScheme="gray">
        View All
      </Button>
    </CustomCard>
  );
};

export default Transactions;
