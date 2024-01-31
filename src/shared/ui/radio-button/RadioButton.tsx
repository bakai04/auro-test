import React from "react";

import { StyledLabel, StyledRadioButton, Wrapper } from "./styled";

interface IRadioButton extends React.ComponentProps<typeof StyledRadioButton> {}

export const RadioButton = ({ children, id, css, ...props }: IRadioButton) => {
  return (
    <Wrapper>
      <StyledRadioButton
        className={"bookInfor__fav"}
        type="radio"
        id={id}
        {...props}
      ></StyledRadioButton>
      <StyledLabel css={css} for={id} className={"bookInfor__fav-label"}>
        {children}
      </StyledLabel>
    </Wrapper>
  );
};
