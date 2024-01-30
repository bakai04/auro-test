import Link from "next/link";

import { styled } from "@/shared/theme/stitchesConfig";

export const Wrapper = styled("div", {
  padding: "32px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "24px",
  textAlign: "center",
});

export const LinkStyled = styled(Link, {
  textDecoration: "underline",
  color: "$midnightBlack",
});

export const BlueSpan = styled("span", {
  color: "$strongBlue",
});
