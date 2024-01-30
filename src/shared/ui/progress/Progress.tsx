import React, { useEffect, useState } from "react";

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

export const Progress = ({ value, prevValue, ...props }: IProgressProps) => {
  const [progress, setProgress] = useState(prevValue || 1);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(value), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ProgressContainer value={value} {...props}>
      <ProgressContainerWrapper active={progress === 100}>
        <ProgressIndicator
          style={{ width: `${progress}%` }}
        ></ProgressIndicator>
      </ProgressContainerWrapper>
    </ProgressContainer>
  );
};
