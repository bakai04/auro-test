import { styled } from "@/shared/theme/stitchesConfig";
import * as Progress from "@radix-ui/react-progress";

export const ProgressIndicator = styled("div", {
    height: "6px",
    borderRadius: "8px",
    transition: "all .5s ease",
});

export const ProgressContainerWrapper = styled("div", {
    position: "relative",
    background: "$paleLander",
    width: "100%",
    height: "4px",
    transform: "translateZ(0)",

    "&::before": {
        background: "$progressLine",
        borderRadius: "50%",
        content: "",
        height: "16px",
        position: "absolute",
        top: "50%",
        "-webkit-transform": "translateY(-50%)",
        transform: "translateY(-50%)",
        width: "16px",
    },

    "&::after": {
        background: "$paleLander",
        borderRadius: "50%",
        content: "",
        height: "16px",
        position: "absolute",
        right: 0,
        top: "50%",
        "-webkit-transform": "translateY(-50%)",
        transform: "translateY(-50%)",
        width: "16px",
    },
});

export const ProgressContainer = styled(Progress.Root, {
    width: "100%",
    height: "4px",

    [`${ProgressIndicator}`]: {
        background:
            "linear-gradient(90.25deg, $progressLine 0,#4455f2 473.72%)",
    },
});
