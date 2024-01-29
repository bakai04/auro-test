import React from "react";
import { Wrapper } from "./styled";
import { Progress, Text } from "@/shared/ui";

export const RegistrationProgress = ({page,percent}) => {
    return (
        <Wrapper>
            <Text variant={"caption1"} color={"blue"}>
                {page}/9
            </Text>
            <Progress value={percent} />
        </Wrapper>
    );
};
