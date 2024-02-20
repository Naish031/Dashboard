import React from "react";
import {
  Box,
  Button,
  HStack,
  Heading,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";

import { FaRegUserCircle } from "react-icons/fa";
import { MdMenu } from "react-icons/md";

const Topbar = ({ title, onOpen }) => {
  return (
    <Box px={4} bg={"white"}>
      <HStack maxWidth={"1080px"} h={"16"} justify={"space-between"} mx="auto">
        <Icon
          as={MdMenu}
          w={8}
          h={8}
          onClick={onOpen}
          display={{
            base: "block",
            lg: "none",
          }}
        />
        <Heading fontWeight={"medium"} fontSize={28}>
          {title}
        </Heading>
        <Menu>
          <MenuButton fontSize={24}>
            <Icon as={FaRegUserCircle} w={8} h={8} />
          </MenuButton>
          <MenuList>
            <MenuItem>Logout</MenuItem>
            <MenuItem>Support</MenuItem>
            <MenuItem>Profile</MenuItem>
            <MenuItem>Settings</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
};

export default Topbar;
