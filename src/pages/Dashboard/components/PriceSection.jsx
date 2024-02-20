import {
  HStack,
  Stack,
  Icon,
  Text,
  Button,
  Flex,
  Image,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import React from "react";
import { CustomCard } from "../../../chakra/CustomCard";

import { BsArrowUpRight } from "react-icons/bs";
import { FaCirclePlus } from "react-icons/fa6";
import { FaCircleMinus } from "react-icons/fa6";

const PriceSection = () => {
  const timestamp = ["7:15pm", "8:15pm", "9:15pm", "10:15pm"];
  return (
    <CustomCard>
      <Flex justify="space-between" align="start">
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
              <HStack fontWeight={"medium"} color={"green.500"}>
                <Icon as={BsArrowUpRight} />
                <Text fontSize={"sm"} fontWeight={"medium"}>
                  22%
                </Text>{" "}
              </HStack>
            </HStack>
          </HStack>
        </Stack>
        <HStack>
          <Button leftIcon={<Icon as={FaCirclePlus} />}>Buy</Button>
          <Button leftIcon={<Icon as={FaCircleMinus} />}>Sell</Button>
        </HStack>
      </Flex>
      <Tabs variant="soft-rounded">
        <Flex justify="end">
          <TabList bg="black.5" p="3px">
            {["1H", "1D", "1W", "1M"].map((tab, index) => (
              <Tab
                _selected={{ bg: "white" }}
                key={index}
                fontSize="sm"
                p="6px"
                borderRadius={"4px"}
              >
                {tab}
              </Tab>
            ))}
          </TabList>
        </Flex>

        <TabPanels>
          <TabPanel>
            <Image
              src="/Dashboard/Graph.png"
              alt="Price Chart"
              width={"100%"}
              mt={"40px"}
            />
            <HStack justify={"space-between"} mt={"20px"}>
              {timestamp.map((time, index) => (
                <Text key={index} fontSize={"sm"} color={"black.80"}>
                  {time}
                </Text>
              ))}
            </HStack>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </CustomCard>
  );
};

export default PriceSection;
