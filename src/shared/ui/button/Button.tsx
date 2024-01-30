import React from "react";

import { StyledButton } from "./styled";

interface IButtonProps extends React.ComponentProps<typeof StyledButton> {}

export const Button = ({ children, ...props }: IButtonProps) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};
