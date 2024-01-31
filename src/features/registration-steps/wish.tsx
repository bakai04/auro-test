import React from "react";

import { useRegistrationSteps } from "@/shared/hook/use-registration-control";
import { Text } from "@/shared/ui";
import Flex from "@/shared/ui/flex/Flex";
import { RadioButton } from "@/shared/ui/radio-button";

import { Wrapper } from "./styled";

const Wish = () => {
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
          What aspects of your life do you wish to gain insight into through
          palmistry?
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
            id={"wish1"}
            value={"wqert1"}
            name={"wish"}
          >
            Love & Relationship
          </RadioButton>
          <RadioButton
            onClick={nextPage}
            id={"wish2"}
            value={"wqert2"}
            name={"wish"}
          >
            Health & Vitality
          </RadioButton>
          <RadioButton
            onClick={nextPage}
            id={"wish3"}
            value={"wqert3"}
            name={"wish"}
          >
            Career & Destiny
          </RadioButton>
        </Flex>
      </Flex>
    </Wrapper>
  );
};

export default Wish;
