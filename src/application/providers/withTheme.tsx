import { globalStyles } from "@/shared/theme/globalStyles";
import { defaultTheme } from "@/shared/theme/theme";
import { AppProps } from "next/app";
import React from "react";

export const withTheme = (app: (props: AppProps) => React.ReactNode) => {
    const WithTheme = (props: AppProps) => {
        globalStyles();
        return <div className={defaultTheme}>{app(props)}</div>;
    };

    return WithTheme;
};
