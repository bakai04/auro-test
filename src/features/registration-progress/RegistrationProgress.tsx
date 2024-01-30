import React from "react";
import { Wrapper } from "./styled";
import { Progress, Text } from "@/shared/ui";

interface IRegistrationProgress {
    page: number;
    percent: number;
}

export const RegistrationProgress = ({
    page,
    percent,
}: IRegistrationProgress) => {
    return (
        <Wrapper>
            <Text variant={"caption1"} color={"blue"}>
                {page}/9
            </Text>
            <Progress value={percent} />
        </Wrapper>
    );
};
