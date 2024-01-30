import type { FC } from "react";
import React from "react";

import { Container } from "./styled";

interface ILayout extends React.ComponentProps<typeof Container> {
  children: React.ReactNode;
}

export const Layout: FC<ILayout> = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};
