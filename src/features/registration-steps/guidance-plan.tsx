import React, { useEffect, useState } from "react";

import { useRegistrationSteps } from "@/shared/hook/use-registration-control";
import { Text } from "@/shared/ui";
import Flex from "@/shared/ui/flex/Flex";
import { HeadAndHeart } from "@/shared/ui/icons";
import { RadioButton } from "@/shared/ui/radio-button";

import { BlueSpan, Wrapper } from "./styled";

interface IData {
  value: number | string;
  displayValue: number | string;
}

const GuidancePlan: React.FC = () => {
  const { prevPage, nextPage } = useRegistrationSteps();
  const [zodiacSign, setZodiacSign] = useState<string>("");
  const [descusionState, setDescusionState] = useState<string>("");

  const determineZodiacSign = (day: IData, month: IData): string => {
    console.log(day, month);
    const astrologicalDates: {
      start: [number, number];
      end: [number, number];
      sign: string;
    }[] = [
      { start: [1, 20], end: [2, 18], sign: "Aquarius" },
      { start: [2, 19], end: [3, 20], sign: "Pisces" },
      { start: [3, 21], end: [4, 19], sign: "Aries" },
      { start: [4, 20], end: [5, 20], sign: "Taurus" },
      { start: [5, 21], end: [6, 20], sign: "Gemini" },
      { start: [6, 21], end: [7, 22], sign: "Cancer" },
      { start: [7, 23], end: [8, 22], sign: "Leo" },
      { start: [8, 23], end: [9, 22], sign: "Virgo" },
      { start: [9, 23], end: [10, 22], sign: "Libra" },
      { start: [10, 23], end: [11, 21], sign: "Scorpio" },
      { start: [11, 22], end: [12, 21], sign: "Sagittarius" },
      { start: [12, 22], end: [1, 19], sign: "Capricorn" },
    ];

    const birthMonth = parseInt(month.value as string, 10);
    const birthDay = parseInt(day.value as string, 10);

    const foundSign = astrologicalDates.find((astrologicalDate) => {
      const [startMonth, startDay] = astrologicalDate.start;
      const [endMonth, endDay] = astrologicalDate.end;

      return (
        (birthMonth === startMonth && birthDay >= startDay) ||
        (birthMonth === endMonth && birthDay <= endDay) ||
        (birthMonth > startMonth && birthMonth < endMonth)
      );
    });

    return foundSign ? foundSign.sign : "Unknown";
  };

  useEffect(() => {
    const storedStateString = localStorage.getItem("state") || "";
    const storedState = JSON.parse(storedStateString);

    if (storedState.decision) {
      setDescusionState(storedState.decision);
    }

    if (storedState && storedState.birthday) {
      const { day, month } = storedState.birthday;

      const calculatedZodiacSign = determineZodiacSign(day, month);

      setZodiacSign(calculatedZodiacSign);
    }
  }, []);

  return (
    <Wrapper>
      <Flex
        justifyContent={"center"}
        gap={"24px"}
        flex={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <HeadAndHeart />
        <Text
          variant={"caption4"}
          textCenter
          color={"midnightBlack"}
          lineHeight={"line30"}
        >
          Based on our data, 27% of <BlueSpan>{zodiacSign} Sun</BlueSpan> people
          also make decisions with their {descusionState}. But don&apos;t worry,
          we&apos;ll consider that while creating your guidance plan.
        </Text>
        <Flex
          justifyContent={"center"}
          gap={"12px"}
          flex={"flex"}
          flexDirection={"row"}
          alignItems={"center"}
        >
          <RadioButton
            onClick={prevPage}
            id={"Back"}
            value={"Back"}
            name={"guidance"}
          >
            Back
          </RadioButton>
          <RadioButton
            onClick={nextPage}
            id={"Next"}
            value={"Next"}
            name={"guidance"}
            checked
          >
            Next
          </RadioButton>
        </Flex>
      </Flex>
    </Wrapper>
  );
};

export default GuidancePlan;
