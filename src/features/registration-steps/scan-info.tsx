import React from "react";

import { useRegistrationSteps } from "@/shared/hook/use-registration-control";
import { Button, Text } from "@/shared/ui";
import Flex from "@/shared/ui/flex/Flex";
import { ScanningHandWithShadow, ShieldIcon } from "@/shared/ui/icons";

import { Wrapper } from "./styled";

const ScanInfo = () => {
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
        <ScanningHandWithShadow />
        <Text
          variant={"heading1"}
          textCenter
          color={"midnightBlack"}
          lineHeight={"line36"}
        >
          Let’s scan your palms
        </Text>
        <Text
          variant={"caption2"}
          textCenter
          color={"midnightBlack"}
          lineHeight={"line28"}
        >
          Follow the on-screen instructions, so we can analyze your palm lines
          and reveal your future, and the secrets of your destiny!
        </Text>
        <Flex
          justifyContent={"center"}
          gap={"12px"}
          flex={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <Flex
            justifyContent={"center"}
            gap={"12px"}
            flex={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            css={{ width: "400px" }}
          >
            <Button onClick={nextPage} type="button">
              Let’s do it
            </Button>
            <Text
              variant={"caption5"}
              color={"midnightBlack"}
              lineHeight={"line18"}
              textStart
            >
              <ShieldIcon
                style={{ display: "inline-block", marginRight: "3px" }}
              />
              No biometric data collected. All recognition process performs on
              your device.
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Wrapper>
  );
};

export default ScanInfo;
