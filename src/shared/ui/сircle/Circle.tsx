import React from "react";

import { CircleStyled } from "./styled";

interface ICircleProps extends React.ComponentProps<typeof CircleStyled> {}

export const Circle = ({ children, ...props }: ICircleProps) => {
  return <CircleStyled {...props}>{children}</CircleStyled>;
};
