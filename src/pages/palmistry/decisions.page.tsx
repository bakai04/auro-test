import React from "react";

import { RegistrationProgress } from "@/features/registration-progress";
import { Wrapper } from "@/pages/palmistry/styled";
import { Button, Text } from "@/shared/ui";
import Flex from "@/shared/ui/flex/Flex";
import { Header } from "@/widgets/header";
import { Layout } from "@/widgets/layout";

const Decisions = () => {
  return (
    <Layout>
      <Header />
      <RegistrationProgress page={8} percent={88} />
      <Wrapper>
        <Flex
          justifyContent={"center"}
          gap={"24px"}
          flex={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <Text
            variant={"heading1"}
            color={"midnightBlack"}
            lineHeight={"line30"}
          >
            Do you make decisions with your head or your heart?
          </Text>
          <Flex
            justifyContent={"center"}
            gap={"12px"}
            flex={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
          >
            <Button type="button">Heart</Button>
            <Button type="button">Head</Button>
            <Button type="button">Both</Button>
          </Flex>
        </Flex>
      </Wrapper>
    </Layout>
  );
};

export default Decisions;
