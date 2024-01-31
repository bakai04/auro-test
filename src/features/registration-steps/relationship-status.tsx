import React from "react";

import { useRegistrationSteps } from "@/shared/hook/use-registration-control";
import { Button, Text } from "@/shared/ui";
import Flex from "@/shared/ui/flex/Flex";

import { Wrapper } from "./styled";

const RelationshipStatus = () => {
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
        >
          <Button onClick={nextPage} type="button">
            Single
          </Button>
          <Button onClick={nextPage} type="button">
            In a relationship
          </Button>
        </Flex>
      </Flex>
    </Wrapper>
  );
};

export default RelationshipStatus;
