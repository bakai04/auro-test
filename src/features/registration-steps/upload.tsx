import Image from "next/image";
import React from "react";

import instruction from "@/assets/images/instruction.png";
import { Wrapper } from "@/features/registration-steps/styled";
import { Button, Text } from "@/shared/ui";
import Flex from "@/shared/ui/flex/Flex";
import { ShieldIcon } from "@/shared/ui/icons";

const Upload = () => {
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
          textCenter
          color={"midnightBlack"}
          lineHeight={"line36"}
        >
          Take your palm picture as instructed
        </Text>
        <Image
          style={{ borderRadius: "8px" }}
          src={instruction}
          alt={"instr"}
        />
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
            <Button type="button">Take a picture now</Button>
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

export default Upload;
