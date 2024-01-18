import { Stack } from "@mui/material";
import React from "react";
import { StyledDrawer, Wrapper } from "./styled";
import { Icons, Text } from "..";

interface IDrawer
    extends Omit<React.ComponentProps<typeof StyledDrawer>, "title"> {
    title: string | React.ReactNode;
    setOpen: (val: boolean) => void;
    open: boolean;
    width: string;
}

export const Drawer = ({
    setOpen,
    width,
    title,
    children,
    ...rest
}: IDrawer) => {
    return (
        <StyledDrawer {...rest} onClose={() => setOpen(false)}>
            <Wrapper>
                <Stack
                    width={"100%"}
                    maxWidth={width}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    gap={"15px"}
                    flexDirection={"row"}
                >
                    <Text variant={"heading2"} color={"white"}>
                        {title}
                    </Text>
                    <Icons.Close
                        style={{ cursor: "pointer" }}
                        onClick={() => setOpen(false)}
                    />
                </Stack>
                {children}
            </Wrapper>
        </StyledDrawer>
    );
};
