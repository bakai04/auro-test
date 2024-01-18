export interface ISubscription {
    id: string;
    plan_id: string;
    user_id: string;
    tokens: number;
    additional_tokens: number;
    created_at: string;
    plan: {
        id: string;
        type: string;
        price: number;
        currency: string;
        tokens: number;
    };
}

export interface ITransaction {
    id: string;
    provider: string;
    amount: number;
    currency: string;
    meta: null | any; // Заменить 'any'
    status: string;
    type: string;
    plan_id: string | null;
    user_id: string;
    referral_id: string | null;
    created_at: string;
    external_id: string | null;
}

export type IUserTransactionResponce = ITransaction[];

export interface IUser {
    id: string;
    email: string;
    tg_id: string | null;
    name: string;
    password: string | null;
    avatar: string | null;
    created_at: string;
    role: string;
    subscription: ISubscription;
}

export interface IUserListResponse {
    data: IUser[];
    pages: number;
}

export interface IUserListArgs {
    search: string;
    page: number;
}
