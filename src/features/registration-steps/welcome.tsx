import React from "react";

import { useRegistrationSteps } from "@/shared/hook/use-registration-control";
import { Button, Text } from "@/shared/ui";
import Flex from "@/shared/ui/flex/Flex";
import { ScanningHand } from "@/shared/ui/icons";

import { LinkStyled } from "./styled";

const Welcome = () => {
  const { nextPage } = useRegistrationSteps();
  const createState = () => {
    try {
      const currentState = JSON?.parse(localStorage?.getItem("state") || "{}");
      if (currentState) {
        const localState = {
          state: {
            funnel: "",
            routes: [
              "welcome",
              "gender",
              "birthday",
              "palms-hold",
              "wish",
              "relationship-status",
              "resonated-element",
              "color-you-like",
              "decisions",
              "guidance-plan",
              "scan-info",
              "upload",
              "scan-photo",
              "email",
              "subscription-plan",
              "paywall",
            ],
            relationship: 0,
            gender: "Male",
            name: "",
            birthday: {
              year: {
                value: "",
                displayValue: "",
              },
              month: {
                value: "",
                displayValue: "",
              },
              day: {
                value: "",
                displayValue: "",
              },
            },
            photoData: null,
            emailUser: "",
            gtagClientId: null,
            planCodeData: {
              planCode: "",
              count: 0,
            },
            wish: 1,
            resonatedElement: "",
            colorYouLike: "",
            decision: "",
          },
          version: 0,
        };
        localStorage.setItem("state", JSON.stringify(localState.state));
      }
      nextPage();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Flex
      justifyContent={"center"}
      gap={"24px"}
      flex={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      css={{ padding: "32px" }}
    >
      <ScanningHand />
      <Text
        variant={"heading2"}
        textCenter
        color={"midnightBlack"}
        lineHeight={"line36"}
      >
        Find your happiness with highly-personalized predictions.
      </Text>
      <Flex
        justifyContent={"center"}
        gap={"12px"}
        flex={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <Button onClick={createState} type="button">
          Let’s Begin
        </Button>

        <Flex
          justifyContent={"center"}
          gap={"6px"}
          flex={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <Text
            variant={"caption3"}
            textCenter
            color={"midnightBlack"}
            lineHeight={"line18"}
          >
            By continuing, you agree to our{" "}
            <LinkStyled href="">EULA</LinkStyled> and{" "}
            <LinkStyled href="">Privacy Notice</LinkStyled>. Have a question?
            Reach our support team here <LinkStyled href="">here</LinkStyled>.
          </Text>

          <Text
            variant={"caption3"}
            textCenter
            color={"greyishBlue"}
            lineHeight={"line18"}
          >
            This Palm Reading App is for entertainment purposes only and will
            not make death predictions
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Welcome;
