import React from 'react';
import {Layout} from "@/widgets/layout";
import {ScanningHand} from "@/shared/ui/icons";
import {Header} from "@/widgets/header";
import Flex from "@/shared/ui/flex/Flex";
import {LinkStyled, Wrapper} from "./styled.ts";
import {Button, Text} from "@/shared/ui";

const Welcome = () => {
    return (
        <Layout>
            <Header />
            <Wrapper>
                <Flex justifyContent={"center"} gap={"24px"} flex={"flex"} flexDirection={"column"}
                      alignItems={"center"}>
                    <ScanningHand/>
                    <Text variant={"heading2"} textCenter color={"midnightBlack"} lineHeight={"line36"}>
                        Find your happiness with highly-personalized predictions.
                    </Text>
                    <Flex justifyContent={"center"} gap={"12px"} flex={"flex"} flexDirection={"column"}
                          alignItems={"center"}>
                        <Button type="button">
                            Let’s Begin
                        </Button>
                        <Flex justifyContent={"center"} gap={"6px"} flex={"flex"} flexDirection={"column"}
                              alignItems={"center"}>
                            <Text variant={"caption3"} textCenter color={"midnightBlack"} lineHeight={"line18"}>
                                By continuing, you agree to our <LinkStyled href="">EULA</LinkStyled> and <LinkStyled
                                href="">Privacy
                                Notice</LinkStyled>. Have a question? Reach our support team here <LinkStyled
                                href="">here</LinkStyled>.
                            </Text>

                            <Text variant={"caption3"} textCenter color={"greyishBlue"} lineHeight={"line18"}>
                                This Palm Reading App is for entertainment purposes only and will not make death
                                predictions
                            </Text>
                        </Flex>
                    </Flex>
                </Flex>
            </Wrapper>
        </Layout>
    );
};

export default Welcome;