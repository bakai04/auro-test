import { keyframes, styled } from "@/shared/theme/stitchesConfig";

const bounce = keyframes({
  "0%": { transform: "scale(1)" },
  "50%": { transform: "scale(.95)" },
  "100%": { transform: "scale(1)" },
});

export const StyledRadioButton = styled("input", {
  position: "absolute",
  opacity: "0",
  cursor: "pointer",
  height: "0",
  width: "0",
});

export const StyledLabel = styled("label", {
  display: "flex",
  position: "relative",
  alignItems: "center",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontSize: "$s7",
  fontWeight: "$medium",
  justifyContent: "center",
  maxWidth: "400px",
  minHeight: "60px",
  minWidth: "250px",
  padding: "0 24px",
  width: "100%",
  webkitUserSelect: "none",
  mozUserSelect: "none",
  msUserSelect: "none",
  userSelect: "none",
  background: "$paleBlue",
  color: "$midnightBlack",
  "&:active": {
    WebkitAnimationDuration: ".2s",
    animationDuration: ".2s",
    WebkitAnimationIterationCount: 1,
    animationIterationCount: 1,
    animationName: bounce,
    background: "$strongBlue",
    color: "$buttonActive",
  },
});

export const Wrapper = styled("div", {
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  [`& ${StyledRadioButton}:checked + ${StyledLabel}`]: {
    background: "$strongBlue",
    color: "$buttonActive",
  },
});
