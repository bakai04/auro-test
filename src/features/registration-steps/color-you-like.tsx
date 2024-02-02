import React from "react";

import { useLocalStorageState } from "@/shared/hook/use-local-storage";
import { useRegistrationSteps } from "@/shared/hook/use-registration-control";
import { Text } from "@/shared/ui";
import Flex from "@/shared/ui/flex/Flex";
import { RadioButton } from "@/shared/ui/radio-button";
import { Circle } from "@/shared/ui/сircle";

import { Wrapper } from "./styled";

const ColorYouLike = () => {
  const [selectedColor, setSelectedColor] = useLocalStorageState(
    "colorYouLike",
    "",
  );
  const { nextPage } = useRegistrationSteps();

  const handleRadioButtonClick = (color) => {
    try {
      setSelectedColor(color);
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
        css={{ width: "100%" }}
      >
        <Text variant={"heading1"} color={"midnightBlack"}>
          Which color do you like the most?
        </Text>
        <Flex
          justifyContent={"center"}
          gap={"6px"}
          flex={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          css={{ width: "100%" }}
        >
          <RadioButton
            onClick={() => handleRadioButtonClick("Red")}
            id={"Red"}
            value={"Red"}
            name={"color"}
            css={{
              display: "flex",
              gap: "24px",
              justifyContent: "flex-start",
            }}
            checked={selectedColor === "Red"}
          >
            <Circle
              css={{
                background: "rgb(255, 87, 88)",
              }}
            />
            Red
          </RadioButton>
          <RadioButton
            onClick={() => handleRadioButtonClick("Yellow")}
            id={"Yellow"}
            value={"Yellow"}
            name={"color"}
            css={{
              display: "flex",
              gap: "24px",
              justifyContent: "flex-start",
            }}
            checked={selectedColor === "Yellow"}
          >
            <Circle
              css={{
                background: "rgb(255, 247, 61)",
              }}
            />
            Yellow
          </RadioButton>
          <RadioButton
            onClick={() => handleRadioButtonClick("Blue")}
            id={"Blue"}
            value={"Blue"}
            name={"color"}
            css={{
              display: "flex",
              gap: "24px",
              justifyContent: "flex-start",
            }}
            checked={selectedColor === "Blue"}
          >
            <Circle
              css={{
                background: "rgb(6, 111, 222)",
              }}
            />
            Blue
          </RadioButton>
          <RadioButton
            onClick={() => handleRadioButtonClick("Orange")}
            id={"Orange"}
            value={"Orange"}
            name={"color"}
            css={{
              display: "flex",
              gap: "24px",
              justifyContent: "flex-start",
            }}
            checked={selectedColor === "Orange"}
          >
            <Circle
              css={{
                background: "rgb(255, 168, 0)",
              }}
            />
            Orange
          </RadioButton>
          <RadioButton
            onClick={() => handleRadioButtonClick("Green")}
            id={"Green"}
            value={"Green"}
            name={"color"}
            css={{
              display: "flex",
              gap: "24px",
              justifyContent: "flex-start",
            }}
            checked={selectedColor === "Green"}
          >
            <Circle
              css={{
                background: "rgb(117, 219, 156)",
              }}
            />
            Green
          </RadioButton>
          <RadioButton
            onClick={() => handleRadioButtonClick("Violet")}
            id={"Violet"}
            value={"Violet"}
            name={"color"}
            css={{
              display: "flex",
              gap: "24px",
              justifyContent: "flex-start",
            }}
            checked={selectedColor === "Violet"}
          >
            <Circle
              css={{
                background: "rgb(151, 71, 255)",
              }}
            />
            Violet
          </RadioButton>
        </Flex>
      </Flex>
    </Wrapper>
  );
};

export default ColorYouLike;
