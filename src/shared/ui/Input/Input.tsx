import { Stack } from "@mui/material";
import React from "react";
import { Text } from "../Text";
import { PreffixWrapper, StyledInput, SuffixWrapper } from "./styled";

interface IIput
    extends Omit<
        React.ComponentProps<typeof StyledInput>,
        "suffix" | "prefix"
    > {
    error?: boolean;
    label?: string | React.ReactNode;
    errorMessage?: string | React.ReactNode;
    suffix?: React.ReactNode;
    preffix?: React.ReactNode;
}

export const Input = ({
    error,
    errorMessage,
    suffix,
    preffix,
    label,
    ...rest
}: IIput) => {
    return (
        <Stack gap={"8px"} flexDirection={"column"}>
            <Text variant={"caption1"} color={"white"}>
                {label}
            </Text>
            <Stack position={"relative"}>
                <SuffixWrapper>{suffix}</SuffixWrapper>
                <StyledInput
                    css={{
                        ...rest.css,
                        paddingRight: preffix ? "42px" : "16px",
                        paddingLeft: suffix ? "42px" : "16px",
                    }}
                    type={error ? "error" : undefined}
                    {...rest}
                />
                <PreffixWrapper>{preffix}</PreffixWrapper>
            </Stack>
            {error && (
                <Text variant={"caption1"} color={"red"}>
                    {errorMessage}
                </Text>
            )}
        </Stack>
    );
};
