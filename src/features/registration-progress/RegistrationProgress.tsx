import React from "react";
import { Wrapper } from "./styled";
import { Progress, Text } from "@/shared/ui";

export const RegistrationProgress = () => {
    return (
        <Wrapper>
            <Text variant={"caption1"} color={"blue"}>
                2/9
            </Text>
            <Progress value={22} />
        </Wrapper>
    );
};
