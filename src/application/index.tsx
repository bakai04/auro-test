import type { AppProps } from "next/app";

import { withModal, withTheme } from "@/application/providers";
import { compose } from "@/shared/lib";

const MyApp = (props: AppProps) => <props.Component {...props.pageProps} />;

export const Application = compose(withTheme, withModal)(MyApp);
