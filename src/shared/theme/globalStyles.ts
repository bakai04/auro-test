import "normalize.css";

import { globalCss } from "./stitchesConfig";

export const globalStyles = globalCss({
    html: {
        fontFamily: "$ibm",
        height: "100vh",
    },
    body: {
        height: "100vh",
        textRendering: "optimizeLegibility",
        fontSmooth: "always",
        "-webkit-font-smoothing": "antialiased",
        background: "$backgroundBody",

        "&::-webkit-scrollbar": {
            width: "0",
            height: "14px",
        },
        "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#B9BCC3",
            borderRadius: "4px",
        },
        "&::-webkit-scrollbar-track": {
            backgroundColor: "white",
        },
    },
    "*, :before, :after": {
        boxSizing: "border-box",
    },
    a: {
        textDecoration: "none",
        display: "flex",
        alignItems: "center",
    },
    "h1, h2, h3, h4, h5, h6": {
        margin: 0,
    },
    li: {
        listStyleType: "none",
    },
    p: {
        margin: 0,
    },
    img: {
        display: "block",
        maxWidth: "100%",
    },
    svg: {
        display: "block",
        overflow: "hidden",
    },
});
