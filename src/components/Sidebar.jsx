import React from "react";
import { Box, HStack, Heading, Stack, Text, Icon } from "@chakra-ui/react";
import { MdDashboard } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { BiSupport } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const isActiveLink = (path) => {
    return location.pathname === path;
  }

  const sidebarData = [
    {
      name: "Dashboard",
      icon: <MdDashboard />,
      path: "/",
    },
    {
      name: "Transactions",
      icon: <GrTransaction />,
      path: "/transaction",
    },
  ];
  return (
    <>
      <Stack
        bg={"white"}
        justify={"space-between"}
        boxShadow={{
          base: "none",
          lg: "0px 4px 4px rgba(0, 0, 0, 0.05)",
        }}
        width={{
          base: "full",
          lg: "16rem",
        }}
        h="100vh"
      >
        <Box>
          <Heading as="h1" textAlign="center" fontSize="20px" pt="3.5rem">
            @NaishDoesCoding
          </Heading>
          <Box mx="4" mt="6">
            {sidebarData.map((item, index) => (
              <Link to={item.path} key={index}>
                <HStack
                  py="3"
                  px="4"
                  cursor={"pointer"}
                  bg={isActiveLink(item.path) ? "gray.200" : "transparent"}
                  _hover={{
                    bg: "gray.200",
                    borderRadius: "10px",
                    color: "black",
                  }}
                  color={isActiveLink(item.path) ? "black" : "#797E82"}
                >
                  <Box>{item.icon}</Box>
                  {/* <Icon fontSize={20}>{item.icon}</Icon> */}
                  <Text fontSize="14px" fontWeight="medium">
                    {item.name}
                  </Text>
                </HStack>
              </Link>
            ))}
          </Box>
        </Box>

        <Box mx="4" my="6">
          <Link to="/support">
            <HStack
              py="3"
              px="4"
              cursor={"pointer"}
              bg={isActiveLink("/support") ? "gray.200" : "transparent"}
  
              _hover={{ bg: "gray.200", borderRadius: "10px", color: "black" }}
              color={isActiveLink("/support") ? "black" : "#797E82"}
            >
              <Box>
                <BiSupport />
              </Box>
              <Text fontSize="14px" fontWeight="medium">
                Support
              </Text>
            </HStack>
          </Link>
        </Box>
      </Stack>
    </>
  );
};

export default Sidebar;
