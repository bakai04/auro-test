import { styled } from "@/shared/theme/stitchesConfig";

export const BlockWrapper = styled("div", {
    background: "$gray4",
    borderRadius: "17px",

    "@smDown": {
        borderRadius: 0,
    },
});

export const BlockHead = styled("div", {
    borderTopLeftRadius: "17px",
    borderTopRightRadius: "17px",
    background: "$gray4",
    padding: "24px 34px",
    borderBottom: "1px solid $gray3",

    "@smDown": {
        padding: "18px 16px",
    },
});

export const BlockBody = styled("div", {
    padding: "30px 34px 45px 34px",

    "@smDown": {
        padding: "18px 16px",
    },
});
