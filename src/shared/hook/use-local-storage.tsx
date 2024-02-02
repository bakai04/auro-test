import { useEffect, useState } from "react";

export const useLocalStorageState = (key, initialValue) => {
  const currentStateString = localStorage.getItem("state") || "";
  const currentState = JSON.parse(currentStateString);
  const [value, setValue] = useState(
    currentState && currentState[key] ? currentState[key] : initialValue,
  );

  useEffect(() => {
    if (currentState) {
      try {
        currentState[key] = value;
        localStorage.setItem("state", JSON.stringify(currentState));
      } catch (e) {
        console.log(e);
      }
    }
  }, [value]);

  return [value, setValue];
};
