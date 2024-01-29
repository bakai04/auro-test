import "normalize.css";

import { globalCss } from "./stitchesConfig";

export const globalStyles = globalCss({
    html: {
        fontFamily: "$sfPro",
        height: "100vh",
    },
    body: {
        height: "100vh",
        textRendering: "optimizeLegibility",
        fontSmooth: "always",
        margin:"0px",
    },
    "*, :before, :after": {
        boxSizing: "border-box",
    },
    a: {
        textDecoration: "none",
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
