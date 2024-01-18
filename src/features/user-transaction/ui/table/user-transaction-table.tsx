import {
    ITRANSACTION_TYPE,
    TRANSACTION_TYPE,
    TRANSACTION_TYPE_ENUM,
} from "@/shared/constants/transactions";
import { Text } from "@/shared/ui";
import {
    GridPaginable,
    TGridPaginableColumnBase,
} from "@/shared/ui/GridPaginable";
import { IUserTransactionResponce } from "@/store/api/my-organization/types";
import { Stack } from "@mui/material";
import { format, parseISO } from "date-fns";
import React, { useState } from "react";

interface IUserTransactionTable {
    data?: IUserTransactionResponce;
}

export const UserTransactionTable = ({ data }: IUserTransactionTable) => {
    const [page, setPage] = useState(0);

    return (
        <Stack gap={"24px"} flexDirection={"column"} marginTop={"24px"}>
            <Text variant={"heading2"}>История операций</Text>
            <GridPaginable
                pageCount={data ? Math.floor(data?.length / 7) : 0}
                selectedPage={page}
                setSelectedPage={setPage}
                rows={data?.slice(page * 7, page * 7 + 7)}
                columns={gridColumnsBase}
            />
        </Stack>
    );
};

UserTransactionTable.displayName = "UserTransactionTable";

export const typeRenderer = (): TGridPaginableColumnBase["render"] => (row) => {
    return TRANSACTION_TYPE[row.type as keyof ITRANSACTION_TYPE];
};

export const dateRenderer = (): TGridPaginableColumnBase["render"] => (row) => {
    const dateObject = parseISO(row.created_at);

    const formattedDate = format(dateObject, "dd.MM.yy, HH:mm:ss");
    return formattedDate;
};

export const amountRenderer =
    (): TGridPaginableColumnBase["render"] => (row) => {
        if (row.type === TRANSACTION_TYPE_ENUM.REPLENISH) {
            return <Text color={"green"}>+{row.amount}</Text>;
        } else {
            return <Text color={"red"}>-{row.amount}</Text>;
        }
    };

const gridColumnsBase: TGridPaginableColumnBase[] = [
    {
        id: "type",
        name: "type",
        label: "Тип",
        width: 140,
        order: 0,
        render: typeRenderer(),
    },
    {
        id: "amount",
        name: "amount",
        label: "Сумма",
        width: 140,
        order: 2,
        render: amountRenderer(),
    },
    {
        id: "created_at",
        name: "created_at",
        label: "Дата",
        width: 140,
        order: 3,
        render: dateRenderer(),
    },
];
