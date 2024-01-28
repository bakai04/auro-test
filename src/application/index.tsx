import { compose } from "@/shared/lib";
import { AppProps } from "next/app";
import { withTheme } from "./providers/withTheme";

const MyApp = (props: AppProps) => <props.Component {...props.pageProps} />;

export const Application = compose(withTheme)(MyApp);
