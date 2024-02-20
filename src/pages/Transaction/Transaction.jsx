import React from "react";
import DashboardLayout from "../../components/DashboardLayout";
import {
  Flex,
  Card,
  Button,
  Icon,
  Tabs,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tag,
  Input,
  InputGroup,
  InputLeftElement,
  HStack,
} from "@chakra-ui/react";
import { MdDownload } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import TransactionTable from "./components/TransactionTable";

const Transaction = () => {
  const tabs = [
    {
      name: "All",
      count: 349,
    },
    {
      name: "Deposit",
      count: 114,
    },
    {
      name: "Withdraw",
      count: 213,
    },
    {
      name: "Trade",
      count: 22,
    },
  ];

  return (
    <DashboardLayout title={"Transactions"} >
      <Flex justify="end" mt={6} mb={3}>
        <Button leftIcon={<Icon as={MdDownload} />}>Export CSV</Button>
      </Flex>
      <Card borderRadius={"1rem"}>
        <Tabs>
          <TabList
            py={4}
            px="2"
            display={"flex"}
            justifyContent={"space-between"}
          >
            <HStack>
              {tabs.map((tab, index) => (
                <Tab key={index} display={"flex"} pb="2" gap={2}>
                  {tab.name}
                  <Tag colorScheme="gray" borderRadius={"full"}>
                    {tab.count}
                  </Tag>
                </Tab>
              ))}
            </HStack>

            <InputGroup maxWidth={"200px"} pr={"6"}>
              <InputLeftElement pointerEvents="none">
                <Icon as={IoIosSearch} />
              </InputLeftElement>
              <Input type="tel" placeholder="Search..." />
            </InputGroup>
          </TabList>

          <TabPanels>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Card>
    </DashboardLayout>
  );
};

export default Transaction;
