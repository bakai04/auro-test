import React, { useEffect } from "react";

import { useLocalStorageState } from "@/shared/hook/use-local-storage";
import { useRegistrationSteps } from "@/shared/hook/use-registration-control";
import { Text } from "@/shared/ui";
import Flex from "@/shared/ui/flex/Flex";
import { RadioButton } from "@/shared/ui/radio-button";

import { Wrapper } from "./styled";

const Gender = () => {
  const [selectedGender, setSelectedGender] = useLocalStorageState(
    "gender",
    "",
  );
  const { nextPage } = useRegistrationSteps();

  useEffect(() => {
    // No need to fetch from local storage here, it's handled by useLocalStorageState
  }, []);

  const createState = (gender) => {
    setSelectedGender(gender);
    nextPage();
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
          css={{ width: "100%", maxWidth: "400px" }}
        >
          <RadioButton
            id={"male"}
            value={"male"}
            name={"gender"}
            checked={selectedGender === "male"}
            onClick={() => createState("male")}
          >
            Male
          </RadioButton>

          <RadioButton
            id={"female"}
            value={"female"}
            name={"gender"}
            checked={selectedGender === "female"}
            onClick={() => createState("female")}
          >
            Female
          </RadioButton>
        </Flex>
      </Flex>
    </Wrapper>
  );
};

export default Gender;
