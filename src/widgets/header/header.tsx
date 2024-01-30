import React from "react";

import { Icons } from "@/shared/ui";

import { PreviosButtonWrapper, Wrapper } from "./styled";

export const Header = () => {
  return (
    <Wrapper>
      <PreviosButtonWrapper>
        <Icons.ArrowLeft />
      </PreviosButtonWrapper>
      <Icons.Logo />
    </Wrapper>
  );
};
