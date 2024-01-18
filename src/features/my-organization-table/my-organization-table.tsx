import { Icons } from "@/shared/ui";
import {
    GridPaginable,
    TGridPaginableColumnBase,
} from "@/shared/ui/GridPaginable";
import { useGetUserListQuery } from "@/store/api/my-organization";
import { Stack } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { UserTransaction } from "../user-transaction";
import { IUser } from "@/store/api/my-organization/types";

export const MyOrganizationTable = () => {
    const router = useRouter();
    const [userData, setUserData] = useState<IUser | null>(null);
    const [page, setPage] = useState(0);
    const { data } = useGetUserListQuery({
        page: page + 1,
        search: router.query.search as string,
    });

    useEffect(() => {
        setPage(+(router.query.page || 0));
    }, [router.query]);

    const handlePageChange = (e: number) => {
        setPage(e);
        router.push({
            query: { ...router.query, page: e },
        });
    };

    return (
        <>
            <GridPaginable
                selectedPage={page}
                setSelectedPage={handlePageChange}
                rows={data?.data}
                pageCount={data?.pages}
                columns={gridColumnsBase}
                onRowSelect={(row) => setUserData(row)}
            />
            <UserTransaction userData={userData} setUserData={setUserData} />
        </>
    );
};

MyOrganizationTable.displayName = "MyOrganizationTable";

export const subscriptionTypeRenderer =
    (): TGridPaginableColumnBase["render"] => (row) => {
        return row.subscription.plan.type;
    };

export const tokensRenderer =
    (): TGridPaginableColumnBase["render"] => (row) => {
        return row.subscription.plan.tokens;
    };

export const actionsRenderer = (): TGridPaginableColumnBase["render"] => () => {
    return (
        <Stack
            gap={"10px"}
            flexDirection={"row"}
            justifyContent={"center"}
            alignItems={"center"}
        >
            <Icons.Edit />
            <Icons.Trach />
        </Stack>
    );
};

const gridColumnsBase: TGridPaginableColumnBase[] = [
    {
        id: "email",
        name: "email",
        label: "Email",
        width: 300,
        order: 0,
    },
    {
        id: "name",
        name: "name",
        label: "Имя",
        width: 300,
        order: 2,
    },
    {
        id: "role",
        name: "role",
        label: "Роль",
        width: 300,
        order: 3,
    },
    {
        id: "subscription",
        name: "subscription",
        label: "Подписка",
        width: 300,
        order: 4,
        render: subscriptionTypeRenderer(),
    },
    {
        id: "tokens",
        name: "subscription",
        label: "Токены",
        width: 300,
        order: 5,
        render: tokensRenderer(),
    },
    {
        id: "actions",
        name: "subscription",
        label: "Действия",
        width: 300,
        order: 5,
        render: actionsRenderer(),
    },
];
