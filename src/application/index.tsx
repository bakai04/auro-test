import type { AppProps } from "next/app";

import { compose } from "@/shared/lib";

import { withTheme } from "./providers/withTheme";

const MyApp = (props: AppProps) => <props.Component {...props.pageProps} />;

export const Application = compose(withTheme)(MyApp);
