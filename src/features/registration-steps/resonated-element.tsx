import React from "react";

import { useRegistrationSteps } from "@/shared/hook/use-registration-control";
import { RadioButton, Text } from "@/shared/ui";
import Flex from "@/shared/ui/flex/Flex";
import { AirIcon, EarthIcon, FireIcon, WaterIcon } from "@/shared/ui/icons";

import { Wrapper } from "./styled";

const ResonatedElement = () => {
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
            onClick={nextPage}
            id={"Earth"}
            value={"Earth"}
            name={"element"}
            css={{
              display: "flex",
              gap: "24px",
              justifyContent: "flex-start",
            }}
          >
            <EarthIcon />
            Earth
          </RadioButton>
          <RadioButton
            onClick={nextPage}
            id={"Water"}
            value={"Water"}
            name={"element"}
            css={{
              display: "flex",
              gap: "24px",
              justifyContent: "flex-start",
            }}
          >
            <WaterIcon />
            Water
          </RadioButton>
          <RadioButton
            onClick={nextPage}
            id={"Fire"}
            value={"Fire"}
            name={"element"}
            css={{
              display: "flex",
              gap: "24px",
              justifyContent: "flex-start",
            }}
          >
            <FireIcon />
            Fire
          </RadioButton>
          <RadioButton
            onClick={nextPage}
            id={"Air"}
            value={"Air"}
            name={"element"}
            css={{
              display: "flex",
              gap: "24px",
              justifyContent: "flex-start",
            }}
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
