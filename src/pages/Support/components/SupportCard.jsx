import React from "react";
import { Box, Flex, Icon, Stack, Text } from "@chakra-ui/react";

const SupportCard = ({ leftComponent, icon, title, text }) => {
  return (
    <Flex
      gap="6"
      justify={"space-between"}
      flexDirection={{
        base: "column",
        xl: "row",
      }}
    >
      <Stack maxW={"380px"}>
        <Icon as={icon} boxSize={"24px"} color={"p.purple"} />
        <Text textStyle={"h1"} as={"h1"} fontWeight={"medium"}>
          {title}
        </Text>
        <Text fontSize={"sm"} color={"black.60"}>
          {text}
        </Text>
      </Stack>
      <Box maxW="550px" w="full">
        {leftComponent}
      </Box>
    </Flex>
  );
};

export default SupportCard;
