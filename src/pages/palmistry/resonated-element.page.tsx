import React from 'react';
import {Header} from "@/widgets/header";
import {RegistrationProgress} from "@/features/registration-progress";
import {Wrapper} from "@/pages/palmistry/styled";
import Flex from "@/shared/ui/flex/Flex";
import {Button, Text} from "@/shared/ui";
import {Layout} from "@/widgets/layout";

const ResonatedElement = () => {
    return (
        <Layout>
            <Header />
            <RegistrationProgress page={6} percent={66} />
            <Wrapper>
                <Flex justifyContent={"center"} gap={"24px"} flex={"flex"} flexDirection={"column"} alignItems={"center"}>
                    <Text variant={"heading1"} color={"midnightBlack"}>
                        Which element resonates with you the most?
                    </Text>
                    <Flex justifyContent={"center"} gap={"12px"} flex={"flex"} flexDirection={"column"} alignItems={"center"}>
                        <Button type="button">
                            <span>Earth</span>
                        </Button>
                        <Button type="button">
                            <span>Water</span>
                        </Button>
                        <Button type="button">
                            <span>Water</span>
                        </Button>
                        <Button type="button" >
                            <span>Air</span>
                        </Button>
                    </Flex>
                </Flex>
            </Wrapper>
        </Layout>
    );
};

export default ResonatedElement;