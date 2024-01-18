import type * as Stitches from "@stitches/react";
import { createStitches } from "@stitches/react";

export const {
    styled,
    css,
    keyframes,
    globalCss,
    theme,
    createTheme,
    config,
    getCssText,
} = createStitches({
    theme: {
        colors: {
            //blue
            primaryBlue: "#1C64F2",

            // gray
            gray1: "#616D8D",
            gray2: "#313E62",
            gray3: "#222B44",
            gray4: "#121825",
            gray6: "#9CA3AF",

            //red
            redCritic: "#FE4242",

            //green
            primaryGreen: "#1ABB34",

            // white
            whiteBase: "#fff",
            whiteAccent: "#F8F9FA",

            // black
            primaryBlack: "#0E0C15",

            /// ///////////////////////////

            backgroundBody: "#0E0C15",
        },
        fonts: {
            ibm: "'IBM Plex Sans', sans-serif",
            inter: "'Inter', sans-serif",
        },
        fontWeights: {
            regular: 400,
            medium: 500,
            semibold: 600,
            bold: 700,
        },
        fontSizes: {
            s1: "56px",
            s2: "40px",
            s3: "30px",
            s4: "26px",
            s5: "24px",
            s6: "22px",
            s7: "18px",
            s8: "16px",
            s9: "15px",
            s10: "14px",
            s11: "13px",
            s12: "12px",
            s13: "11px",
            s14: "10px",
            s15: "20px",
        },
        lineHeights: {
            standard: 1.33,
        },
        letterSpacings: {},
        sizes: {},
        borderWidths: {},
        borderStyles: {},
        radii: {
            r1: "24px",
            r2: "16px",
            r3: "12px",
            r4: "10px",
        },
        shadows: {
            blueBase: "#2389FD",
            blueDark: "#0B71E3",
        },
        zIndices: {},
        transitions: {
            buttonCommon:
                "background-color 130ms ease, color 130ms ease, box-shadow 130ms ease",
        },
    },
    media: {
        xssUp: "(min-width: 320px)",
        xssDown: "(max-width: 320px)",

        xsUp: "(min-width: 480px)",
        xsDown: "(max-width: 480px)",

        smUp: "(min-width: 576px)",
        smDown: "(max-width: 576px)",

        mdUp: "(min-width: 768px)",
        mdDown: "(max-width: 768px)",

        lgUp: "(min-width: 992px)",
        lgDown: "(max-width: 992px)",

        lggUp: "(min-width: 1024px)",
        lggDown: "(max-width: 1024px)",

        xlUp: "(min-width: 1200px)",
        xlDown: "(max-width: 1200px)",

        xxlUp: "(min-width: 1400px)",
        xxlDown: "(max-width: 1400px)",

        hdUp: "(min-width: 1540px)",
        hdDown: "(max-width: 1540px)",

        fullHdUp: "(min-width: 1600px)",
        fullHdDown: "(max-width: 1600px)",

        hdMiddleUp: "(min-width: 1750px)",
        hdMiddleDown: "(max-width: 1750px)",

        ultrahdUp: "(min-width: 1978px)",
        ultrahdDown: "(max-width: 1978px)",
    },
    utils: {
        m: (value: number | string) => ({
            margin: value,
        }),
        mt: (value: number | string) => ({
            marginTop: value,
        }),
        mr: (value: number | string) => ({
            marginRight: value,
        }),
        mb: (value: number | string) => ({
            marginBottom: value,
        }),
        ml: (value: number | string) => ({
            marginLeft: value,
        }),
        mx: (value: number | string) => ({
            marginLeft: value,
            marginRight: value,
        }),
        my: (value: number | string) => ({
            paddingTop: value,
            paddingBottom: value,
        }),
        p: (value: number | string) => ({
            padding: value,
        }),
        pt: (value: number | string) => ({
            paddingTop: value,
        }),
        pr: (value: number | string) => ({
            paddingRight: value,
        }),
        pb: (value: number | string) => ({
            paddingBottom: value,
        }),
        pl: (value: number | string) => ({
            paddingLeft: value,
        }),
        px: (value: number | string) => ({
            paddingLeft: value,
            paddingRight: value,
        }),
        py: (value: number | string) => ({
            paddingTop: value,
            paddingBottom: value,
        }),
        size: (value: number | string) => ({
            width: value,
            height: value,
        }),
        linearGradient: (value: string) => ({
            backgroundImage: `linear-gradient(${value})`,
        }),
        br: (value: number) => ({
            borderRadius: value,
        }),
        hexa: (value: Record<string, string | undefined>) => value,
    },
});

export type TStitchesCurrentConfig = typeof config;

const { media } = config;

export type TStitchesMediaKeys = keyof typeof media;
export type TStitchesColors = Stitches.CSS<typeof config>["color"];
