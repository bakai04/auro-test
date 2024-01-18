import { Drawer } from "@/shared/ui";
import { useGetUserTransactionQuery } from "@/store/api/my-organization";
import { IUser } from "@/store/api/my-organization/types";
import React, { useEffect, useState } from "react";
import { UserTransactionTable } from "./ui/table/user-transaction-table";
import { UserTransactionChart } from "./ui/chart/user-transaction-chart";

interface IUserTransaction {
    userData: IUser | null;
    setUserData: (val: IUser | null) => void;
}

export const UserTransaction = ({
    userData,
    setUserData,
}: IUserTransaction) => {
    const { data } = useGetUserTransactionQuery({
        id: userData?.id || "",
    });

    const handleClick = () => {
        setUserData(null);
    };

    return (
        <Drawer
            width={"470px"}
            open={!!userData}
            setOpen={handleClick}
            anchor="right"
            title={userData?.email}
        >
            {data && <UserTransactionChart userData={userData} data={data} />}
            <UserTransactionTable data={data} />
        </Drawer>
    );
};
