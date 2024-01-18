import { styled } from "@/shared/theme/stitchesConfig";
import { Layout } from "../layout";

export const Container = styled(Layout, {
    "@smDown": {
        padding: 0,
    },
});
