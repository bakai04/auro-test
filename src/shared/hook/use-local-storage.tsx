import { useEffect, useState } from "react";

interface UseLocalStorageStateOptions {
  key?: string;
  initialValue?: string;
}

export const useLocalStorageState = (
  options: UseLocalStorageStateOptions,
): [string, (val: string | ((val: string) => string)) => void] => {
  const currentStateString = localStorage.getItem("state") || "";
  const currentState = JSON.parse(currentStateString);
  const [value, setValue] = useState(
    currentState && currentState[options?.key || ""]
      ? currentState[options?.key || ""]
      : options.initialValue,
  );

  useEffect(() => {
    if (currentState) {
      try {
        currentState[options?.key || ""] = value;
        localStorage.setItem("state", JSON.stringify(currentState));
      } catch (e) {
        console.log(e);
      }
    }
  }, [value]);

  return [value, setValue];
};
