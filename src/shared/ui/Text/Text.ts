import { styled } from "@/shared/theme/stitchesConfig";

export const Text = styled("p", {
    fontFamily: "$sfPro",
    fontWeight: 500,
    lineHeight: "$standard",
    color: "$whiteBase",
    variants: {
        /**
         * Text alignment
         */
        textCenter: {
            true: {
                textAlign: "center",
            },
        },
        textLeft: {
            true: {
                textAlign: "left",
            },
        },
        textRight: {
            true: {
                textAlign: "right",
            },
        },

        /**
         * Text color
         */
        color: {
            blue: {
                color: "$strongBlue80",
            },
            midnightBlack: {
                color: "$midnightBlack",
            },
            inherit: {
                color: "inherit",
            },
        },

        /**
         * Text size
         */
        size: {
            base: {
                fontSize: "$s8",
            },
            xs: {
                fontSize: "$s13",
            },
            sm: {
                fontSize: "$s11",
            },
            lg: {
                fontSize: "$s7",
            },
            xl: {
                fontSize: "$s2",
            },
        },

        /**
         * Text variant
         */
        variant: {
            //Heading
            heading1: {
                fontSize: "$s15",
                fontWeight: "$medium",
            },

            // Caption
            caption1: {
                fontSize: "$s10",
                fontWeight: "$semibold",
            },

            caption2: {
                fontSize: "$s7",
                fontWeight: "$regular",
            },
        },
    },
});
