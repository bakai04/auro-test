import React, { useEffect, useState } from "react";

import { useRegistrationSteps } from "@/shared/hook/use-registration-control";
import { Text } from "@/shared/ui";
import Flex from "@/shared/ui/flex/Flex";
import { RadioButton } from "@/shared/ui/radio-button";

import { Wrapper } from "./styled";

const Gender = () => {
  const { nextPage } = useRegistrationSteps();
  const [selectedGender, setSelectedGender] = useState("");

  useEffect(() => {
    // Retrieve the current gender value from localStorage on component mount
    const currentStateString = localStorage.getItem("state") || "";
    const currentState = JSON.parse(currentStateString);

    if (currentState && currentState.state && currentState.state.gender) {
      setSelectedGender(
        currentState.state.gender === "male" ? "male" : "Female",
      );
    }
  }, []);

  // const createState = (gender) => {
  // const currentStateString = localStorage.getItem("state") || "";
  // let currentState = JSON.parse(currentStateString);
  //
  // if (!currentState) {
  //   currentState = {
  //     state: {},
  //     version: 0,
  //   };
  // }
  //
  // currentState.state.gender = gender;
  //
  // localStorage.setItem("state", JSON.stringify(currentState));
  //   nextPage();
  // };

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
            onClick={() => nextPage()}
          >
            Male
          </RadioButton>

          <RadioButton
            id={"female"}
            value={"female"}
            name={"gender"}
            checked={selectedGender === "female"}
            onClick={() => nextPage()}
          >
            Female
          </RadioButton>
        </Flex>
      </Flex>
    </Wrapper>
  );
};

export default Gender;
