import React from "react";

import { useRegistrationSteps } from "@/shared/hook/use-registration-control";
import { RadioButton, Text } from "@/shared/ui";
import Flex from "@/shared/ui/flex/Flex";

import { Wrapper } from "./styled";

const RelationshipStatus = () => {
  const { nextPage } = useRegistrationSteps();

  return (
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
            id={"In a relationship"}
            value={"In a relationship"}
            name={"relationshipStatus"}
          >
            In a relationship
          </RadioButton>
        </Flex>
      </Flex>
    </Wrapper>
  );
};

export default RelationshipStatus;
