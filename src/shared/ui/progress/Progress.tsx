import React from "react";

import {
  ProgressContainer,
  ProgressContainerWrapper,
  ProgressIndicator,
} from "./styled";

export interface IProgressProps
  extends React.ComponentProps<typeof ProgressContainer> {
  value: number;
  prevValue?: number;
}

export const Progress = ({ value, ...props }: IProgressProps) => {
  return (
    <ProgressContainer value={value} {...props}>
      <ProgressContainerWrapper active={value >= 99}>
        <ProgressIndicator style={{ width: `${value}%` }}></ProgressIndicator>
      </ProgressContainerWrapper>
    </ProgressContainer>
  );
};
