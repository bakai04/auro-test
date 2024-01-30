import React from "react";

import { RegistrationProgress } from "@/features/registration-progress";
import { Wrapper } from "@/pages/palmistry/styled";
import { useRegistrationSteps } from "@/shared/hook/use-registration-steps";
import { Text } from "@/shared/ui";
import Flex from "@/shared/ui/flex/Flex";
import { RadioButton } from "@/shared/ui/radioButton";
import { Header } from "@/widgets/header";
import { Layout } from "@/widgets/layout";

const RelationshipStatus = () => {
  const { nextPage } = useRegistrationSteps();

  return (
    <Layout>
      <Header />
      <RegistrationProgress page={5} percent={55} />
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
            So we can get to know you better, please tell us your relationship
            status.
          </Text>
          <Flex
            justifyContent={"center"}
            gap={"12px"}
            flex={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            css={{ width: "100%", maxWidth: "400px" }}
          >
            <RadioButton
              onClick={nextPage}
              id={"Single"}
              value={"Single"}
              name={"relationshipStatus"}
            >
              Single
            </RadioButton>
            <RadioButton
              onClick={nextPage}
              id={"In-a-relationship"}
              value={"In-a-relationship"}
              name={"relationshipStatus"}
            >
              In a relationship
            </RadioButton>
          </Flex>
        </Flex>
      </Wrapper>
    </Layout>
  );
};

export default RelationshipStatus;
