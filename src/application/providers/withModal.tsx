import type { AppProps } from "next/app";
import React from "react";

import { ModalsRoot } from "@/shared/hook/use-modal";

export const withModal = (app: (props: AppProps) => React.ReactNode) => {
  const WithModal = (props: AppProps) => {
    return (
      <>
        <ModalsRoot />
        {app(props)}
      </>
    );
  };

  return WithModal;
};
