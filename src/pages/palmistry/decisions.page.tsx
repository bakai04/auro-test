import React from "react";

import { RegistrationProgress } from "@/features/registration-progress";
import { Wrapper } from "@/pages/palmistry/styled";
import { useRegistrationSteps } from "@/shared/hook/use-registration-steps";
import { Text } from "@/shared/ui";
import Flex from "@/shared/ui/flex/Flex";
import { RadioButton } from "@/shared/ui/radioButton";
import { Header } from "@/widgets/header";
import { Layout } from "@/widgets/layout";

const Decisions = () => {
  const { nextPage } = useRegistrationSteps();

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
            css={{ width: "100%" }}
          >
            <RadioButton
              onClick={nextPage}
              id={"Heart"}
              value={"Heart"}
              name={"decisions "}
            >
              Heart
            </RadioButton>
            <RadioButton
              onClick={nextPage}
              id={"Head"}
              value={"Head"}
              name={"decisions "}
            >
              Head
            </RadioButton>
            <RadioButton
              onClick={nextPage}
              id={"Both"}
              value={"Both"}
              name={"decisions "}
            >
              Both
            </RadioButton>
          </Flex>
        </Flex>
      </Wrapper>
    </Layout>
  );
};

export default Decisions;
