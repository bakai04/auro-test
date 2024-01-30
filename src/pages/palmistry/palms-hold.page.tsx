import React from "react";

import { RegistrationProgress } from "@/features/registration-progress";
import { LinkStyled, Wrapper } from "@/pages/palmistry/styled";
import { Button, Text } from "@/shared/ui";
import Flex from "@/shared/ui/flex/Flex";
import { AstralHand } from "@/shared/ui/icons";
import { Header } from "@/widgets/header";
import { Layout } from "@/widgets/layout";

const PalmsHold = () => {
  return (
    <Layout>
      <Header />
      <RegistrationProgress page={3} percent={33} />
      <Wrapper>
        <Flex
          justifyContent={"center"}
          gap={"24px"}
          flex={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <AstralHand />
          <Text
            variant={"caption2"}
            textCenter
            color={"midnightBlack"}
            lineHeight={"line28"}
          >
            Your palms hold a wealth of information about your fate and
            personality
          </Text>
          <Flex
            justifyContent={"center"}
            gap={"12px"}
            flex={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
          >
            <Button type="button">Continue</Button>
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
                <LinkStyled href="">Privacy Notice</LinkStyled>. Have a
                question? Reach our support team here{" "}
                <LinkStyled href="">here</LinkStyled>.
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Wrapper>
    </Layout>
  );
};

export default PalmsHold;
