import React from "react";
import { BlockBody, BlockHead, BlockWrapper } from "./styled";
import { Text } from "@/shared/ui";

interface IInformBlock
    extends Omit<React.ComponentProps<typeof BlockWrapper>, "title"> {
    children: React.ReactNode;
    title: string | React.ReactNode;
}

export const InfromBlock = ({ children, title, ...props }: IInformBlock) => {
    return (
        <BlockWrapper {...props}>
            <BlockHead>
                <Text color="white" variant={"heading1"}>
                    {title}
                </Text>
            </BlockHead>
            <BlockBody>{children}</BlockBody>
        </BlockWrapper>
    );
};
