import React from 'react';
import {Layout} from "@/widgets/layout";
import {Header} from "@/widgets/header";
import {RegistrationProgress} from "@/features/registration-progress";
import {Wrapper} from "@/pages/palmistry/styled";
import Flex from "@/shared/ui/flex/Flex";
import {Button, Text} from "@/shared/ui";

const Wish = () => {
    return (
        <Layout>
            <Header />
            <RegistrationProgress page={4} percent={44} />
            <Wrapper>
                <Flex justifyContent={"center"} gap={"24px"} flex={"flex"} flexDirection={"column"} alignItems={"center"}>
                    <Text variant={"heading1"} color={"midnightBlack"}  lineHeight={"line30"}>
                        What aspects of your life do you wish to gain insight into through palmistry?
                    </Text>
                    <Flex justifyContent={"center"} gap={"12px"} flex={"flex"} flexDirection={"column"} alignItems={"center"}>
                        <Button type="button">
                            Love & Relationship
                        </Button>
                        <Button type="button" >
                            Health & Vitality
                        </Button>
                        <Button type="button" >
                            Career & Destiny
                        </Button>
                    </Flex>
                </Flex>
            </Wrapper>
        </Layout>
    );
};

export default Wish;