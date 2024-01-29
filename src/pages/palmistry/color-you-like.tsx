import React from 'react';
import {Layout} from "@/widgets/layout";
import {Header} from "@/widgets/header";
import {RegistrationProgress} from "@/features/registration-progress";
import {Wrapper} from "@/pages/palmistry/styled";
import Flex from "@/shared/ui/flex/Flex";
import {Button, Text} from "@/shared/ui";

const ColorYouLike = () => {
    return (
        <Layout>
            <Header />
            <RegistrationProgress page={7} percent={77} />
            <Wrapper>
                <Flex justifyContent={"center"} gap={"24px"} flex={"flex"} flexDirection={"column"} alignItems={"center"}>
                    <Text variant={"heading1"} color={"midnightBlack"}>
                        Which color do you like the most?
                    </Text>
                    <Flex justifyContent={"center"} gap={"12px"} flex={"flex"} flexDirection={"column"} alignItems={"center"}>
                        <Button type="button">
                            <span>Red</span>
                        </Button>
                        <Button type="button">
                            <span>Yellow</span>
                        </Button>
                        <Button type="button">
                            <span>Blue</span>
                        </Button>
                        <Button type="button" >
                            <span>Orange</span>
                        </Button>
                        <Button type="button" >
                            <span>Green</span>
                        </Button>
                        <Button type="button" >
                            <span>Violet</span>
                        </Button>
                    </Flex>
                </Flex>
            </Wrapper>
        </Layout>

    );
};

export default ColorYouLike;