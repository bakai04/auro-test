import React from "react";

import { RegistrationProgress } from "@/features/registration-progress";
import { BlueSpan, Wrapper } from "@/pages/palmistry/styled";
import { useRegistrationSteps } from "@/shared/hook/use-registration-steps";
import { Text } from "@/shared/ui";
import Flex from "@/shared/ui/flex/Flex";
import { HeadAndHeart } from "@/shared/ui/icons";
import { RadioButton } from "@/shared/ui/radioButton";
import { Header } from "@/widgets/header";
import { Layout } from "@/widgets/layout";

const GuidancePlan = () => {
  const { nextPage, prevPage } = useRegistrationSteps();

  return (
    <Layout>
      <Header />
      <RegistrationProgress page={9} percent={100} />
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
            Based on our data, 27% of <BlueSpan>Aquarius Sun</BlueSpan> people
            also make decisions with their Heart. But don&apos;t worry,
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
    </Layout>
  );
};

export default GuidancePlan;
