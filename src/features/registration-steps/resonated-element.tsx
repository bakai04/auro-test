import React from "react";

import { useLocalStorageState } from "@/shared/hook/use-local-storage";
import { useRegistrationSteps } from "@/shared/hook/use-registration-control";
import { RadioButton, Text } from "@/shared/ui";
import Flex from "@/shared/ui/flex/Flex";
import { AirIcon, EarthIcon, FireIcon, WaterIcon } from "@/shared/ui/icons";

import { Wrapper } from "./styled";

const ResonatedElement = () => {
  const [selectedElement, setSelectedElement] = useLocalStorageState({
    key: "resonatedElement",
  });
  const { nextPage } = useRegistrationSteps();

  const handleRadioButtonClick = (element: string) => {
    try {
      setSelectedElement(element);
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
        <Text variant={"heading1"} color={"midnightBlack"}>
          Which element resonates with you the most?
        </Text>
        <Flex
          justifyContent={"center"}
          gap={"6px"}
          flex={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          css={{ width: "100%", maxWidth: "400px" }}
        >
          <RadioButton
            onClick={() => handleRadioButtonClick("Earth")}
            id={"Earth"}
            value={"Earth"}
            name={"element"}
            css={{
              display: "flex",
              gap: "24px",
              justifyContent: "flex-start",
            }}
            checked={selectedElement === "Earth"}
          >
            <EarthIcon />
            Earth
          </RadioButton>
          <RadioButton
            onClick={() => handleRadioButtonClick("Water")}
            id={"Water"}
            value={"Water"}
            name={"element"}
            css={{
              display: "flex",
              gap: "24px",
              justifyContent: "flex-start",
            }}
            checked={selectedElement === "Water"}
          >
            <WaterIcon />
            Water
          </RadioButton>
          <RadioButton
            onClick={() => handleRadioButtonClick("Fire")}
            id={"Fire"}
            value={"Fire"}
            name={"element"}
            css={{
              display: "flex",
              gap: "24px",
              justifyContent: "flex-start",
            }}
            checked={selectedElement === "Fire"}
          >
            <FireIcon />
            Fire
          </RadioButton>
          <RadioButton
            onClick={() => handleRadioButtonClick("Air")}
            id={"Air"}
            value={"Air"}
            name={"element"}
            css={{
              display: "flex",
              gap: "24px",
              justifyContent: "flex-start",
            }}
            checked={selectedElement === "Air"}
          >
            <AirIcon />
            Air
          </RadioButton>
        </Flex>
      </Flex>
    </Wrapper>
  );
};

export default ResonatedElement;
