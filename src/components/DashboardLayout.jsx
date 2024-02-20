import { Box, Container, Flex, useDisclosure } from "@chakra-ui/react";
import React from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import SideDrawer from "./SideDrawer";

const DashboardLayout = ({ title, children }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Flex>
      <Box display={{ base: "none", lg: "block" }}>
        <Sidebar />
      </Box>

      <SideDrawer isOpen={isOpen} onClose={onClose} />
      <Box flexGrow={1}>
        <Topbar title={title} onOpen={onOpen} />
        <Container
          overflowX={"hidden"}
          overflowY={"auto"}
          h={"calc(100vh - 88px)"}
          mt="6"
          maxWidth={1080}
        >
          {children}
        </Container>
      </Box>
    </Flex>
  );
};

export default DashboardLayout;
