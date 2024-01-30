import { styled } from "@/shared/theme/stitchesConfig";

export const Text = styled("p", {
  fontFamily: "$sfPro",
  fontWeight: 500,
  // lineHeight: "$standard",
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
      greyishBlue: {
        color: "$greyishBlue",
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
        fontSize: "$s15",
        fontWeight: "$medium",
      },
      heading2: {
        fontSize: "$s5",
        fontWeight: "$semibold",
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
      caption3: {
        fontSize: "$s12",
        fontWeight: "$regular",
      },
      caption4: {
        fontSize: "$s8",
        fontWeight: "$bold",
      },
    },
    /**
     * line height
     */
    lineHeight: {
      line36: {
        lineHeight: "36px",
      },
      line18: {
        lineHeight: "18px",
      },
      line28: {
        lineHeight: "28px",
      },
      line30: {
        lineHeight: "30px",
      },
    },
  },
});
