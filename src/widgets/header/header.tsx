import React from "react";
import { HeaderInner, Profile, Wrapper } from "./styled";
import { Text } from "@/shared/ui";
import { Avatar, Stack } from "@mui/material";
import { Organization } from "@/shared/ui/Icon";
import { Layout } from "../layout";

export const Header = () => {
    return (
        <Layout>
            <Wrapper>
                <HeaderInner>
                    <Text color={"white"} variant={"heading1"}>
                        BitTest
                    </Text>
                    <Stack
                        alignItems={"center"}
                        gap={"10px"}
                        flexDirection={"row"}
                    >
                        <Organization />
                        <Text color={"white"} variant={"caption1"}>
                            Моя организация
                        </Text>
                    </Stack>
                </HeaderInner>
                <Profile>
                    <Avatar />
                    <Stack>
                        <Text color={"gray1"} variant={"caption2"}>
                            Вы авторизованы
                        </Text>
                        <Text color={"white"} variant={"caption3"}>
                            Администратор
                        </Text>
                    </Stack>
                </Profile>
            </Wrapper>
        </Layout>
    );
};
