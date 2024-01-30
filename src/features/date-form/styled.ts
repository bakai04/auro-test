import { styled } from "@/shared/theme/stitchesConfig";

export const Wrapper = styled("div", {
  padding: "32px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "24px",
});

export const From = styled("form", {});

export const FormInner = styled("div", {
  marginBottom: "24px",
  position: "relative",
});

export const InputWrapper = styled("div", {
  display: "grid",
  gap: "12px",
  gridTemplateColumns: "repeat(3,1fr)",
  gridTemplateRows: "1",
  maxWidth: "400px",
  position: "relative",
  zIndex: 3,
});

export const ErrorMessage = styled("p", {
  color: "$coral",
  fontSize: "$s12",
  left: "12px",
  marginLeft: "12px",
  opacity: 0,
  fontWeight: "$medium",
  position: "absolute",
  WebkitTransform: "translateY(-32px)",
  transform: "translateY(-32px)",

  variants: {
    active: {
      true: {
        transition: "all .2s",
        opacity: 1,
        position: "static",
        WebkitTransform: "translateY(6px)",
        transform: "translateY(6px)",
      },
    },
  },
});
