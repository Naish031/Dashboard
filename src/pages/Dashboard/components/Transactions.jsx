import React, { Fragment } from "react";
import { CustomCard } from "../../../chakra/CustomCard";
import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import { IoLogoUsd } from "react-icons/io5";
import { FaBtc } from "react-icons/fa";

const Transactions = () => {
  const transactionsList = [
    {
      icon: IoLogoUsd,
      text: "USD Deposits",
      amount: "+ $1000",
      timestamp: "2022-06-09 7:06 PM",
    },
    {
      icon: FaBtc,
      text: "BTC Sell",
      amount: "- 12.48513391 BTC",
      timestamp: "2022-05-27 12:32 PM",
    },
    {
      icon: IoLogoUsd,
      text: "USD Deposit",
      amount: "+ $81,123.10",
      timestamp: "2022-06-09 7:06 PM",
    },
  ];
  return (
    <CustomCard h="full">
      <Text mb="8" fontSize={"sm"} color={"black.80"}>
        Recent Transactions
      </Text>
      <Stack spacing={4}>
        {transactionsList.map((transaction, index) => (
          <Fragment key={index}>
            {index !== 0 && <Divider mt="1" />}
            <Flex gap={4} w="full">
              <Grid
                bg={"black.5"}
                placeItems={"center"}
                boxSize={10}
                borderRadius={"full"}
              >
                <Icon as={transaction.icon} />
              </Grid>
              <Flex justify={"space-between"} w="full">
                <Stack spacing={0}>
                  <Text textStyle={"h6"}>{transaction.text}</Text>
                  <Text fontSize={"sm"} color={"black.60"}>
                    {transaction.timestamp}
                  </Text>
                </Stack>
                <Text textStyle={"h6"}>{transaction.amount}</Text>
              </Flex>
            </Flex>
          </Fragment>
        ))}
      </Stack>
      <Button w="full" colorScheme="gray" mt={8}>
        View All
      </Button>
    </CustomCard>
  );
};

export default Transactions;
