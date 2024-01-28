import React from "react";
import { Layout } from "../layout";
import { PreviosButtonWrapper, Wrapper } from "./styled";
import { Icons } from "@/shared/ui";

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