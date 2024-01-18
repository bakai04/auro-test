import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_API_URL } from "@/shared/lib";
import {
    IUserListArgs,
    IUserListResponse,
    IUserTransactionResponce,
} from "./types";

export const organizationApi = createApi({
    reducerPath: "organizationApi",
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_API_URL,
    }),

    tagTypes: ["UserList", "UserTransaction"],
    endpoints: (builder) => ({
        /**
         * getMyOrganization
         */
        getUserList: builder.query<IUserListResponse, IUserListArgs>({
            query: (params) => ({
                url: `/user/list/`,
                method: "GET",
                params,
            }),
            providesTags: ["UserList"],
        }),

        /**
         * getUserTransaction
         */
        getUserTransaction: builder.query<
            IUserTransactionResponce,
            { id: null | string }
        >({
            query: ({ id }) => ({
                url: `/user/${id}/transactions`,
                method: "GET",
            }),
            providesTags: ["UserTransaction"],
        }),
    }),
});

export const {
    useGetUserListQuery,
    useLazyGetUserListQuery,
    useGetUserTransactionQuery,
    useLazyGetUserTransactionQuery,
} = organizationApi;

export const {} = organizationApi.endpoints;
