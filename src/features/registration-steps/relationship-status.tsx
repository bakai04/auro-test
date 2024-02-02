import React from "react";

import { useLocalStorageState } from "@/shared/hook/use-local-storage";
import { useRegistrationSteps } from "@/shared/hook/use-registration-control";
import { RadioButton, Text } from "@/shared/ui";
import Flex from "@/shared/ui/flex/Flex";

import { Wrapper } from "./styled";

const RelationshipStatus = () => {
  const [selectedStatus, setSelectedStatus] = useLocalStorageState(
    "relationshipStatus",
    "",
  ); // Using "relationshipStatus" as the key
  const { nextPage } = useRegistrationSteps();

  const handleRadioButtonClick = (status) => {
    try {
      setSelectedStatus(status);
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
            onClick={() => handleRadioButtonClick("Single")}
            id={"Single"}
            value={"Single"}
            name={"relationshipStatus"}
            checked={selectedStatus === "Single"}
          >
            Single
          </RadioButton>
          <RadioButton
            onClick={() => handleRadioButtonClick("In a relationship")}
            id={"In a relationship"}
            value={"In a relationship"}
            name={"relationshipStatus"}
            checked={selectedStatus === "In a relationship"}
          >
            In a relationship
          </RadioButton>
        </Flex>
      </Flex>
    </Wrapper>
  );
};

export default RelationshipStatus;
