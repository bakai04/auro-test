import { styled } from "@/shared/theme/stitchesConfig";

export const Wrapper = styled("header", {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    position: "relative",
    background: "$paleBlue",
    minHeight: "50px",
});

export const PreviosButtonWrapper = styled("div", {
    left: "28px",
    position: "absolute",
});
