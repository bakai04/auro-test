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
        borderRadius: "8px",
        a: {
            cursor: "pointer",
            width: "38px",
            padding: "6px 14px",
            fontWeight: "$medium",
            fontSize: "$s8",
            borderRadius: "8px",
            color: "$whiteBase",

            "&:hover": {
                background: "$gray2",
            },
        },
    },
});
