import { styled } from "@/shared/theme/stitchesConfig";

export const Wrapper = styled("div", {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: "17px",
    background: "$gray4",
    padding: "16px 24px",
    margin: "34px 0px",
});

export const HeaderInner = styled("div", {
    display: "flex",
    gap: "44px",
    alignItems: "center",

    "@smDown": {
        width: "100%",
        justifyContent: "space-between",
    },
});

export const Profile = styled("div", {
    display: "flex",
    gap: "12px",
    border: "1px solid $gray3",
    alignItems: "center",
    borderRadius: "6px",
    padding: "8px 14px",

    "@smDown": {
        display: "none",
    },
});
