import React from "react";

import { Progress, Text } from "@/shared/ui";

import { Wrapper } from "./styled";

interface IRegistrationProgress {
  page: number;
  percent: number;
}

export const RegistrationProgress = ({
  page,
  percent,
}: IRegistrationProgress) => {
  return (
    <>
      {page < 10 && page !== 0 && (
        <Wrapper>
          <Text variant={"caption1"} color={"blue"}>
            {page}/9
          </Text>
          <Progress value={percent} prevValue={1} />
        </Wrapper>
      )}
    </>
  );
};
