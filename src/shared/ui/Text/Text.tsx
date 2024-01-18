import { styled } from "@/shared/theme/stitchesConfig";

export const Text = styled("p", {
    fontFamily: "$ibm",
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
            white: {
                color: "$whiteBase",
            },

            red: {
                color: "$redCritic",
            },
            gray1: {
                color: "$gray1",
            },
            green: {
                color: "$primaryGreen",
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
            // Heading
            heading1: {
                fontSize: "$s6",
                fontWeight: "$bold",
            },

            heading2: {
                fontSize: "$s15",
                fontWeight: "$semibold",
            },

            // Caption
            caption1: {
                fontSize: "$s8",
                fontWeight: "$medium",
            },
            caption2: {
                fontSize: "$s12",
                fontWeight: "$regular",
            },
            caption3: {
                fontSize: "$s10",
                fontWeight: "$medium",
            },
            caption4: {
                fontSize: "$s10",
                fontWeight: "$semibold",
            },
        },
    },
    defaultVariants: {
        color: "base",
        size: "base",
        variant: "body2",
    },
});
