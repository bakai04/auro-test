import { compose } from "@/shared/lib";
import { AppProps } from "next/app";
import { withTheme } from "./providers/withTheme";
import { withRedux } from "./providers/withRedux";

const MyApp = (props: AppProps) => <props.Component {...props.pageProps} />;

export const Application = compose(withTheme, withRedux)(MyApp);
