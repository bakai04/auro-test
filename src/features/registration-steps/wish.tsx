import { useRouter } from "next/router";
import React from "react";

import { useLocalStorageState } from "@/shared/hook/use-local-storage";
import { useRegistrationSteps } from "@/shared/hook/use-registration-control";
import { Text } from "@/shared/ui";
import Flex from "@/shared/ui/flex/Flex";
import { RadioButton } from "@/shared/ui/radio-button";

import { Wrapper } from "./styled";

const Wish = () => {
  const [selectedWish, setSelectedWish] = useLocalStorageState({ key: "wish" });
  const { nextPage } = useRegistrationSteps();
  const router = useRouter();

  const handleRedirect = () => {
    router.push("/palmistry/resonated-element");
  };

  const createState = (wish: string) => {
    setSelectedWish(wish);

    if (wish === "Love & Relationship") {
      nextPage();
    } else {
      handleRedirect();
    }
  };

  return (
    <Wrapper>
      <Flex
        justifyContent={"center"}
        gap={"24px"}
        flex={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <Text
          variant={"heading1"}
          color={"midnightBlack"}
          lineHeight={"line30"}
        >
          What aspects of your life do you wish to gain insight into through
          palmistry?
        </Text>
        <Flex
          justifyContent={"center"}
          gap={"12px"}
          flex={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          css={{ width: "100%", maxWidth: "400px" }}
        >
          <RadioButton
            onClick={() => createState("Love & Relationship")}
            id={"wish1"}
            value={"wqert1"}
            name={"wish"}
            checked={selectedWish === "Love & Relationship"}
          >
            Love & Relationship
          </RadioButton>
          <RadioButton
            onClick={() => createState("Health & Vitality")}
            id={"wish2"}
            value={"wqert2"}
            name={"wish"}
            checked={selectedWish === "Health & Vitality"}
          >
            Health & Vitality
          </RadioButton>
          <RadioButton
            onClick={() => createState("Career & Destiny")}
            id={"wish3"}
            value={"wqert3"}
            name={"wish"}
            checked={selectedWish === "Career & Destiny"}
          >
            Career & Destiny
          </RadioButton>
        </Flex>
      </Flex>
    </Wrapper>
  );
};

export default Wish;
