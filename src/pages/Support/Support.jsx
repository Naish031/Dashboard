import React from "react";
import DashboardLayout from "../../components/DashboardLayout";
import SupportCard from "./components/SupportCard";
import ContactCard from "./components/ContactCard";
import { FaEnvelope } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { Stack } from "@chakra-ui/react";
import InfoCard from "../Dashboard/components/InfoCard";

const Support = () => {
  return (
    <DashboardLayout title={"Support"}>
      <Stack spacing={"80px"}>
        <SupportCard
          leftComponent={<ContactCard />}
          title={"Contact Us"}
          text={
            "Have a question or just want to know more? Feel free to reach out to us."
          }
          icon={FaEnvelope}
        />
        <SupportCard
          leftComponent={
            <InfoCard
              inverted={true}
              imgUrl="/Dashboard/Visual.png"
              tagText={"Loans"}
              text={
                "Learn more about Loans – Keep your Bitcoin, access it’s value without selling it"
              }
            />
          }
          title={"Live Chat"}
          text={"Don’t have time to wait for the answer? Chat with us now."}
          icon={FaMessage}
        />
      </Stack>
    </DashboardLayout>
  );
};

export default Support;
