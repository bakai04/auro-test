import type { CSSProperties } from "@stitches/react";
import React, { forwardRef, useMemo } from "react";

import { useDevice } from "@/shared/hook/useDevice";
import { styled } from "@/shared/theme/stitchesConfig";

const Flex = styled("div", {
  display: "flex",
});

type ComponentProps = React.ComponentProps<typeof Flex>;
type ComponentCSSProp = Pick<
  CSSProperties,
  | "alignContent"
  | "alignItems"
  | "justifyContent"
  | "gap"
  | "flexFlow"
  | "flexShrink"
  | "flexWrap"
  | "flex"
  | "flexDirection"
  | "flexBasis"
  | "flexGrow"
>;

type FlexBoxContainerProps = ComponentProps &
  ComponentCSSProp & {
    xs?: boolean;
    md?: boolean;
    lg?: boolean;
  };

const FlexBox = forwardRef<HTMLDivElement, FlexBoxContainerProps>(
  (
    {
      children,
      css = {},
      justifyContent,
      alignContent,
      alignItems,
      gap,
      flex,
      flexDirection,
      flexWrap,
      flexFlow,
      flexBasis,
      flexGrow,
      flexShrink,
      xs = null,
      md = null,
      lg = null,
      ...props
    },
    innerRef,
  ) => {
    const { desktop, phone, tablet } = useDevice();
    const hasDevices = ![xs, md, lg].some((x) => x);

    const childrens = useMemo(() => {
      if (hasDevices) {
        return children;
      }

      if (xs && phone) {
        return children;
      }

      if (md && tablet) {
        return children;
      }

      if (lg && desktop) {
        return children;
      }

      return null;
    }, [lg, xs, md, desktop, tablet, phone, children, hasDevices]);

    const flexProperties = {
      justifyContent,
      alignContent,
      alignItems,
      gap,
      flex,
      flexDirection,
      flexWrap,
      flexFlow,
      flexBasis,
      flexGrow,
      flexShrink,
    };

    return (
      <React.Fragment>
        {childrens ? (
          <Flex
            {...props}
            css={{
              ...flexProperties,
              ...css,
            }}
            ref={innerRef}
          >
            {childrens}
          </Flex>
        ) : null}
      </React.Fragment>
    );
  },
);

export default FlexBox;
