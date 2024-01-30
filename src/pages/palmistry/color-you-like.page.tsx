import React from "react";

import { RegistrationProgress } from "@/features/registration-progress";
import { Wrapper } from "@/pages/palmistry/styled";
import { useRegistrationSteps } from "@/shared/hook/use-registration-steps";
import { Text } from "@/shared/ui";
import Flex from "@/shared/ui/flex/Flex";
import { RadioButton } from "@/shared/ui/radioButton";
import { Circle } from "@/shared/ui/сircle";
import { Header } from "@/widgets/header";
import { Layout } from "@/widgets/layout";

const ColorYouLike = () => {
  const { nextPage } = useRegistrationSteps();

  return (
    <Layout>
      <Header />
      <RegistrationProgress page={7} percent={77} />
      <Wrapper>
        <Flex
          justifyContent={"center"}
          gap={"24px"}
          flex={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          css={{ width: "100%" }}
        >
          <Text variant={"heading1"} color={"midnightBlack"}>
            Which color do you like the most?
          </Text>
          <Flex
            justifyContent={"center"}
            gap={"12px"}
            flex={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            css={{ width: "100%" }}
          >
            <RadioButton
              onClick={nextPage}
              id={"Red"}
              value={"Red"}
              name={"color"}
              css={{
                display: "flex",
                gap: "24px",
                justifyContent: "flex-start",
              }}
            >
              <Circle
                css={{
                  background: "rgb(255, 87, 88)",
                }}
              />
              Red
            </RadioButton>
            <RadioButton
              onClick={nextPage}
              id={"Yellow"}
              value={"Yellow"}
              name={"color"}
              css={{
                display: "flex",
                gap: "24px",
                justifyContent: "flex-start",
              }}
            >
              <Circle
                css={{
                  background: "rgb(255, 247, 61)",
                }}
              />
              Yellow
            </RadioButton>
            <RadioButton
              onClick={nextPage}
              id={"Blue"}
              value={"Blue"}
              name={"color"}
              css={{
                display: "flex",
                gap: "24px",
                justifyContent: "flex-start",
              }}
            >
              <Circle
                css={{
                  background: "rgb(6, 111, 222)",
                }}
              />
              Blue
            </RadioButton>
            <RadioButton
              onClick={nextPage}
              id={"Orange"}
              value={"Orange"}
              name={"color"}
              css={{
                display: "flex",
                gap: "24px",
                justifyContent: "flex-start",
              }}
            >
              <Circle
                css={{
                  background: "rgb(255, 168, 0)",
                }}
              />
              Orange
            </RadioButton>
            <RadioButton
              onClick={nextPage}
              id={"Green"}
              value={"Green"}
              name={"color"}
              css={{
                display: "flex",
                gap: "24px",
                justifyContent: "flex-start",
              }}
            >
              <Circle
                css={{
                  background: "rgb(117, 219, 156)",
                }}
              />
              Green
            </RadioButton>
            <RadioButton
              onClick={nextPage}
              id={"Violet"}
              value={"Violet"}
              name={"color"}
              css={{
                display: "flex",
                gap: "24px",
                justifyContent: "flex-start",
              }}
            >
              <Circle
                css={{
                  background: "rgb(151, 71, 255)",
                }}
              />
              Violet
            </RadioButton>
          </Flex>
        </Flex>
      </Wrapper>
    </Layout>
  );
};

export default ColorYouLike;
