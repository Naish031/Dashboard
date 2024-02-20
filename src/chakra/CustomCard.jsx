import { chakra } from "@chakra-ui/react";

export const CustomCard = chakra("div", {
  baseStyle: {
    bg: "white",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.05)",
    borderRadius: "xl",
    p: 6,
  },
});
