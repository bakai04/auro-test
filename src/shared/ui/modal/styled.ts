import { styled } from "@/shared/theme/stitchesConfig";

export const ModalWrapper = styled("div", {
  position: "fixed",
  top: "0",
  bottom: "0",
  right: "0",
  left: "0",
  background: "rgba(16,32,77,.35)",
  zIndex: "1",
});

export const ModalContent = styled("div", {
  background: "$mainGradient",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: "auto",
});
