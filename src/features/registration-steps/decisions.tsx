import React from "react";

import { useLocalStorageState } from "@/shared/hook/use-local-storage";
import { useRegistrationSteps } from "@/shared/hook/use-registration-control";
import { Text } from "@/shared/ui";
import Flex from "@/shared/ui/flex/Flex";
import { RadioButton } from "@/shared/ui/radio-button";

import { Wrapper } from "./styled";

const Decisions = () => {
  const [selectedDecision, setSelectedDecision] = useLocalStorageState(
    "decision",
    "",
  );
  const { nextPage } = useRegistrationSteps();

  const handleRadioButtonClick = (decision) => {
    try {
      setSelectedDecision(decision);
      nextPage();
    } catch (e) {
      console.log(e);
    }
  };

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
            onClick={() => handleRadioButtonClick("Heart")}
            id={"Heart"}
            value={"Heart"}
            name={"decisions"}
            checked={selectedDecision === "Heart"}
          >
            Heart
          </RadioButton>
          <RadioButton
            onClick={() => handleRadioButtonClick("Head")}
            id={"Head"}
            value={"Head"}
            name={"decisions"}
            checked={selectedDecision === "Head"}
          >
            Head
          </RadioButton>
          <RadioButton
            onClick={() => handleRadioButtonClick("Both")}
            id={"Both"}
            value={"Both"}
            name={"decisions"}
            checked={selectedDecision === "Both"}
          >
            Both
          </RadioButton>
        </Flex>
      </Flex>
    </Wrapper>
  );
};

export default Decisions;
