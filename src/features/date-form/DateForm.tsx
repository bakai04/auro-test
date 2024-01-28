import React, { useRef, useState } from "react";
import { ErrorMessage, FormInner, From, InputWrapper, Wrapper } from "./styled";
import { Button } from "@/shared/ui";
import { Controller, useForm } from "react-hook-form";
import {
    checkDateValidation,
    formDayController,
    formMonthController,
    formYearController,
} from "@/shared/lib/date-controller";
import { useClickOutside } from "@/shared/hook/use-click-outside";
import { Input } from "@/shared/ui/Input";
import { Text } from "@/shared/ui/Text";

export interface IDateFormValues {
    year: string;
    month: string;
    day: string;
}

export const DateForm = () => {
    const [isValid, setIsValid] = useState(true);
    const ref = useRef(null);
    const formMethods = useForm<IDateFormValues>({
        defaultValues: {
            year: "",
            month: "",
            day: "",
        },
        shouldUnregister: true,
    });

    const {
        control,
        handleSubmit,
        getValues,
        trigger,
        reset,
        formState: { isValid: isFormValid },
    } = formMethods;

    const startValidation = async () => {
        const { year, month, day } = getValues();
        const isValidDate = checkDateValidation(+year, +month, +day);
        trigger();
        setIsValid(isValidDate);
    };

    const onSubmit = async (data: any) => {
        reset();
    };

    useClickOutside(ref, startValidation);
    return (
        <Wrapper>
            <Text variant={"heading1"} color={"midnightBlack"}>
                What’s your date of birth?
            </Text>
            <Text variant={"caption2"} textCenter color={"midnightBlack"}>
                Your birth date reveals your core personality traits, needs and
                desires.
            </Text>
            <From onSubmit={handleSubmit(onSubmit)} ref={ref}>
                <FormInner>
                    <InputWrapper>
                        <Controller
                            name="year"
                            control={control}
                            rules={{
                                required: true,
                                min: {
                                    value: 1923,
                                    message: "",
                                },
                            }}
                            render={({ field }) => (
                                <Input
                                    placeholder="YYYY"
                                    value={field.value}
                                    name="year"
                                    label="Year"
                                    onChange={(e) =>
                                        field.onChange(
                                            formYearController(e.target.value)
                                        )
                                    }
                                />
                            )}
                        />
                        <Controller
                            name="month"
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({ field }) => (
                                <Input
                                    value={field.value}
                                    placeholder="MM"
                                    label="Month"
                                    onChange={(e) =>
                                        field.onChange(
                                            formMonthController(e.target.value)
                                        )
                                    }
                                />
                            )}
                        />
                        <Controller
                            name="day"
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({ field }) => (
                                <Input
                                    placeholder="DD"
                                    value={field.value}
                                    onFocus={() => setIsValid(true)}
                                    onChange={(e) =>
                                        field.onChange(
                                            formDayController(
                                                e.target.value,
                                                getValues()
                                            )
                                        )
                                    }
                                    label="Day"
                                />
                            )}
                        />
                    </InputWrapper>
                    <ErrorMessage active={!isValid}>
                        Date not found. Please check your details and try again.
                    </ErrorMessage>
                </FormInner>
                <Button type="submit" disabled={!isFormValid}>
                    Next
                </Button>
            </From>
        </Wrapper>
    );
};
