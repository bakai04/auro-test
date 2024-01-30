import { useEffect, useState } from "react";

import { screenSizes } from "./screenDevices";

interface DeviceProps {
  phone: boolean;
  tablet: boolean;
  desktop: boolean;
}

export function useDevice(breakpoints = screenSizes): DeviceProps {
  const isMOBILE = "isMOBILE";
  const isTABLET = "isTABLET";
  const isDESKTOP = "isDESKTOP";

  const [device, setDevice] = useState("");

  const onResizeDevice = () => {
    if (window.innerWidth < breakpoints.tablet) {
      setDevice(isMOBILE);
    } else if (window.innerWidth < breakpoints.desktop) {
      setDevice(isTABLET);
    } else {
      setDevice(isDESKTOP);
    }
  };

  useEffect(() => {
    onResizeDevice();
    window.addEventListener("resize", onResizeDevice);
    return () => {
      window.removeEventListener("resize", onResizeDevice);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    phone: device === isMOBILE,
    tablet: device === isTABLET,
    desktop: device === isDESKTOP,
  };
}
