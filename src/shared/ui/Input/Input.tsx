import React from "react";
import { Label, TextField, Wrapper } from "./styled";

interface IInputProps extends React.ComponentProps<typeof TextField> {
    label: string | React.ReactNode;
}

export const Input = ({ label, ...props }: IInputProps) => {
    return (
        <Wrapper>
            <Label>{label}</Label>
            <TextField {...props} />
        </Wrapper>
    );
};
