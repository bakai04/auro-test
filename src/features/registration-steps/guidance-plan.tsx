import React from "react";

import { useRegistrationSteps } from "@/shared/hook/use-registration-control";
import { Text } from "@/shared/ui";
import Flex from "@/shared/ui/flex/Flex";
import { HeadAndHeart } from "@/shared/ui/icons";
import { RadioButton } from "@/shared/ui/radio-button";

import { BlueSpan, Wrapper } from "./styled";

const GuidancePlan = () => {
  const { prevPage } = useRegistrationSteps();

  return (
    <Wrapper>
      <Flex
        justifyContent={"center"}
        gap={"24px"}
        flex={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <HeadAndHeart />
        <Text
          variant={"caption4"}
          textCenter
          color={"midnightBlack"}
          lineHeight={"line30"}
        >
          Based on our data, 27% of <BlueSpan>Aquarius Sun</BlueSpan> people
          also make decisions with their Heart. But don&apos;t worry, we&apos;ll
          consider that while creating your guidance plan.
        </Text>
        <Flex
          justifyContent={"center"}
          gap={"12px"}
          flex={"flex"}
          flexDirection={"row"}
          alignItems={"center"}
        >
          <RadioButton
            onClick={prevPage}
            id={"Back"}
            value={"Back"}
            name={"guidance"}
          >
            Back
          </RadioButton>
          <RadioButton id={"Next"} value={"Next"} name={"guidance"} checked>
            Next
          </RadioButton>
        </Flex>
      </Flex>
    </Wrapper>
  );
};

export default GuidancePlan;
