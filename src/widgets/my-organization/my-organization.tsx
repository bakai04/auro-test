import React from "react";
import { InfromBlock } from "../inform-block";
import { Stack } from "@mui/material";
import { Text } from "@/shared/ui";
import { SearchInput } from "@/features/search-input";
import { MyOrganizationTable } from "@/features/my-organization-table";
import { Container } from "./styled";

const MyOrganization = () => {
    return (
        <Container>
            <InfromBlock title="Моя организация">
                <Stack flexDirection={"column"} gap="24px">
                    <Text color={"white"} variant={"heading1"}>
                        Пользователи
                    </Text>
                    <SearchInput />
                    <MyOrganizationTable />
                </Stack>
            </InfromBlock>
        </Container>
    );
};

export default MyOrganization;
