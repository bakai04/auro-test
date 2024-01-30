import React from 'react';
import {Layout} from "@/widgets/layout";
import {Header} from "@/widgets/header";
import {RegistrationProgress} from "@/features/registration-progress";
import {Wrapper} from "@/pages/palmistry/styled";
import Flex from "@/shared/ui/flex/Flex";
import {Button, Text} from "@/shared/ui";

const RelationshipStatus = () => {
    return (
        <Layout>
            <Header />
            <RegistrationProgress page={5} percent={55} />
            <Wrapper>
                <Flex justifyContent={"center"} gap={"24px"} flex={"flex"} flexDirection={"column"} alignItems={"center"}>
                    <Text variant={"heading1"} color={"midnightBlack"}  lineHeight={"line30"}>
                        So we can get to know you better, please tell us your relationship status.
                    </Text>
                    <Flex justifyContent={"center"} gap={"12px"} flex={"flex"} flexDirection={"column"} alignItems={"center"}>
                        <Button type="button">
                            Single
                        </Button>
                        <Button type="button">
                            In a relationship
                        </Button>
                    </Flex>
                </Flex>
            </Wrapper>
        </Layout>

    );
};

export default RelationshipStatus;