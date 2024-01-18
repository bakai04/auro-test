import React, { FC } from "react";
import { Container } from "./styled";
import { CSSProperties } from "@stitches/react";

interface ILayout extends React.ComponentProps<typeof Container> {
    children: React.ReactNode;
}

export const Layout: FC<ILayout> = ({ children, ...props }) => {
    return <Container {...props}>{children}</Container>;
};
