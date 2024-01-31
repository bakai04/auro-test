import React from "react";

import { StyledLabel, StyledRadioButton, Wrapper } from "./styled";

interface IRadioButton extends React.ComponentProps<typeof StyledRadioButton> {}

export const RadioButton = ({ children, id, css, ...props }: IRadioButton) => {
  return (
    <Wrapper>
      <StyledRadioButton type="radio" id={id} {...props}></StyledRadioButton>
      <StyledLabel css={css} htmlFor={id}>
        {children}
      </StyledLabel>
    </Wrapper>
  );
};
