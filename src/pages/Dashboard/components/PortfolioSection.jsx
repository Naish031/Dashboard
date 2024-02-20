import React from "react";
import { Button, HStack, Icon, Stack, Tag, Text } from "@chakra-ui/react";
import {
  AiOutlineArrowDown,
  AiOutlineArrowUp,
  AiOutlineInfoCircle,
} from "react-icons/ai";

const PortfolioSection = () => {
  return (
    <HStack
      justify={"space-between"}
      bg={"white"}
      borderRadius={"xl"}
      p="6"
      align={{
        base: "flex-start",
        xl: "center",
      }}
      flexDir={{
        base: "column",
        xl: "row",
      }}
      spacing={{
        base: 4,
        xl: 0,
      }}
    >
      <HStack
        spacing={{
          base: 2,
          xl: 16,
        }}
        align={{
          base: "flex-start",
          xl: "center",
        }}
        flexDir={{
          base: "column",
          xl: "row",
        }}
      >
        <Stack>
          <HStack color={"black.80"}>
            <Text fontSize={"sm"}>Total Portolio Value</Text>
            <Icon as={AiOutlineInfoCircle} />
          </HStack>
          <Text textStyle={"h2"} fontWeight={"medium"}>
            $1,000,000
          </Text>
        </Stack>
        <Stack>
          <HStack color={"black.80"}>
            <Text fontSize={"sm"}>Wallet Balance </Text>
          </HStack>
          <HStack
            spacing={6}
            align={{
              base: "flex-start",
              sm: "center",
            }}
            flexDir={{
              base: "column",
              sm: "row",
            }}
          >
            <HStack>
              <Text textStyle={"h2"} fontWeight={"medium"}>
                $100,000
              </Text>{" "}
              <Tag colorScheme="gray">BTC</Tag>
            </HStack>
            <HStack>
              <Text textStyle={"h2"} fontWeight={"medium"}>
                $10,000
              </Text>{" "}
              <Tag colorScheme="gray">USD</Tag>
            </HStack>
          </HStack>
        </Stack>
      </HStack>

      <HStack>
        <Button leftIcon={<Icon as={AiOutlineArrowDown} />}>Deposit</Button>
        <Button leftIcon={<Icon as={AiOutlineArrowUp} />}>Withdraw</Button>
      </HStack>
    </HStack>
  );
};

export default PortfolioSection;
