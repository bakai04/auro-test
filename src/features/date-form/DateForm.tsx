import React, { useEffect, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";

import { useClickOutside } from "@/shared/hook/use-click-outside";
import { useLocalStorageState } from "@/shared/hook/use-local-storage";
import { useRegistrationSteps } from "@/shared/hook/use-registration-control";
import {
  checkDateValidation,
  formDayController,
  formMonthController,
  formYearController,
} from "@/shared/lib/date-controller";
import { Button, Input, Text } from "@/shared/ui";

import { ErrorMessage, FormInner, From, InputWrapper, Wrapper } from "./styled";

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
  const { nextPage } = useRegistrationSteps();

  const {
    control,
    handleSubmit,
    getValues,
    trigger,
    reset,
    formState: { isValid: isFormValid },
  } = formMethods;

  const [, setSelectedDate] = useLocalStorageState({ key: "birthday" }); // Using "birthday" as the key

  useEffect(() => {
    // Retrieve the current date values from localStorage on component mount
    const currentStateString = localStorage.getItem("state") || "";
    const currentState = JSON.parse(currentStateString);

    if (currentState && currentState.birthday) {
      const { year, month, day } = currentState.birthday;

      // Set the default values in the form
      reset({
        year: year?.value || "",
        month: month?.value || "",
        day: day?.value || "",
      });
    }
  }, [reset]);

  const startValidation = async () => {
    const { year, month, day } = getValues();
    const isValidDate = checkDateValidation(+year, +month, +day);
    trigger();
    setIsValid(isValidDate);
  };

  const onSubmit = async (data: IDateFormValues) => {
    try {
      const currentStateString = localStorage.getItem("state") || "";
      const currentState = JSON.parse(currentStateString);

      if (currentState) {
        const monthNames = [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ];
        currentState.birthday = {
          year: {
            value: data.year,
            displayValue: data.year,
          },
          month: {
            value: data.month,
            displayValue: monthNames[parseInt(data.month, 10) - 1] || "",
          },
          day: {
            value: data.day,
            displayValue: data.day,
          },
        };

        // Update local storage using the hook
        setSelectedDate(currentState.birthday);

        // localStorage.setItem("state", JSON.stringify(currentState)); // This line is not needed, as the hook updates the state
      }

      nextPage();
    } catch (e) {
      console.log(e);
    }
  };

  useClickOutside(ref, startValidation);
  return (
    <Wrapper>
      <Text variant={"heading1"} color={"midnightBlack"}>
        What’s your date of birth?
      </Text>
      <Text variant={"caption2"} textCenter color={"midnightBlack"}>
        Your birth date reveals your core personality traits, needs and desires.
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
                    field.onChange(formYearController(e.target.value))
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
                    field.onChange(formMonthController(e.target.value))
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
                      formDayController(e.target.value, getValues()),
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
        <Button onClick={nextPage} type="submit" disabled={!isFormValid}>
          Next
        </Button>
      </From>
    </Wrapper>
  );
};
