import { styled } from "@/shared/theme/stitchesConfig";
import { Drawer } from "@mui/material";

export const Wrapper = styled("div", {
    padding: "56px 20px",
    background: "$gray4",
    height: "100%",
    width: "fit-content",
});

export const StyledDrawer = styled(Drawer, {
    ".MuiDrawer-paper": {
        background: "$gray4",
    },
});
