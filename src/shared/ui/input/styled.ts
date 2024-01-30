import { styled } from "@/shared/theme/stitchesConfig";

export const Wrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "6px",
});

export const Label = styled("p", {
  fontSize: "$s12",
  fontFamily: "$sfPro",
  color: "$slateBluePlaceholder",
  marginLeft: "6px",
});

export const TextField = styled("input", {
  background: "$paleBlueInput",
  border: "2px solid $paleLander",
  fontFamily: "$sfPro",
  color: "$midnightBlack",
  WebkitAppearance: "none",
  appearance: "none",
  borderRadius: "8px",
  fontSize: "16px",
  height: "48px",
  lineHeight: "18px",
  maxWidth: "400px",
  outline: "none",
  padding: "5px 12px",
  transition: "border-color .3s ease",
  width: "100%",

  "&::placeholder": {
    fontSize: "18px",
    color: "$slateBluePlaceholder",
  },

  "&:focus": {
    borderColor: "$strongBlue",
    transitionDelay: ".1s",
  },
});
