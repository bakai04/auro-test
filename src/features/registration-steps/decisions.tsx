import React from "react";

import { useRegistrationSteps } from "@/shared/hook/use-registration-control";
import { Text } from "@/shared/ui";
import Flex from "@/shared/ui/flex/Flex";
import { RadioButton } from "@/shared/ui/radio-button";

import { Wrapper } from "./styled";

const Decisions = () => {
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
  );
};

export default Decisions;
