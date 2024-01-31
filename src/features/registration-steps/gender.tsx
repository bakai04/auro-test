import React from "react";

import { useRegistrationSteps } from "@/shared/hook/use-registration-control";
import { Text } from "@/shared/ui";
import Flex from "@/shared/ui/flex/Flex";
import { RadioButton } from "@/shared/ui/radio-button";

import { Wrapper } from "./styled";

const Gender = () => {
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
        <Text variant={"heading1"} color={"midnightBlack"}>
          What’s your gender?
        </Text>
        <Text
          variant={"caption2"}
          textCenter
          color={"midnightBlack"}
          lineHeight={"line28"}
        >
          In Palmistry, everyone is a blend of masculine and feminine, so it
          helps to know yours.
        </Text>
        <Flex
          justifyContent={"center"}
          gap={"12px"}
          flex={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          {/* Передайте соответствующий пол в функцию handleButtonClick */}
          <RadioButton
            id={"male"}
            value={"male"}
            name={"gender"}
            onClick={nextPage}
          >
            Male
          </RadioButton>

          <RadioButton
            id={"Female"}
            value={"Female"}
            name={"gender"}
            onClick={nextPage}
          >
            Female
          </RadioButton>
        </Flex>
      </Flex>
    </Wrapper>
  );
};

export default Gender;
