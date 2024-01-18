import { styled } from "@/shared/theme/stitchesConfig";

export const Wrapper = styled("div", {
    ".paginator": {
        display: "flex",
        alignItems: "center",
        gap: "4px",
    },
    ".page--active": {
        background: "#1C64F2",
    },
    ".page": {
        cursor: "pointer",
        padding: "6px 14px",
        fontWeight: "$medium",
        fontSize: "$s8",
        color: "$whiteBase",
        borderRadius: "8px",

        "&:hover": {
            background: "$gray2",
        },
    },
});
