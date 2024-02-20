import React from "react";
import { CustomCard } from "../../../chakra/CustomCard";
import { Tag, Text } from "@chakra-ui/react";

const InfoCard = ({ imgUrl, tagText, text, inverted }) => {
  return (
    <CustomCard
      bgImage={imgUrl}
      bgColor={inverted ? "p.purple" : "white"}
      bgSize={"cover"}
      bgRepeat={"no-repeat"}
    >
      <Tag
        bg={inverted ? "white" : "p.purple"}
        color={inverted ? "p.purple" : "white"}
        borderRadius={"full"}
      >
        {tagText}
      </Tag>
      <Text
        textStyle={"h5"}
        fontWeight={"medium"}
        mt={4}
        color={inverted ? "white" : ""}
      >
        {text}
      </Text>
    </CustomCard>
  );
};

export default InfoCard;
