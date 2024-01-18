import { styled } from "@/shared/theme/stitchesConfig";

export const StyledInput = styled("input", {
    color: "$whiteBase",
    fontWeight: "$regular",
    fontSize: "$s10",
    width: "100%",
    borderRadius: "8px",
    minHeight: "46px",
    border: "1px solid $gray2",
    background: "$gray4",
    padding: "0px 16px",

    "::placeholder": {
        color: "$gray1",
        fontWeight: "$regular",
        fontSize: "$s10",
    },

    "&:focus": {
        border: "1px solid $primaryBlue",
        outline: 0,
    },

    "&:disabled": {
        border: "1px solid $gray1",
    },

    variants: {
        type: {
            error: {
                border: "1px solid $redCritic !important",
            },
        },
    },
});

export const SuffixWrapper = styled("div", {
    position: "absolute",
    top: "15px",
    left: "16px",
});

export const PreffixWrapper = styled("div", {
    position: "absolute",
    top: "15px",
    right: "16px",
});
