import { useEffect, useState } from "react";

export function useLocalStorageState(initialState, key) {
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem(key);
    if (storedValue === null || storedValue === "undefined") {
      return initialState;
    }
    try {
      return JSON.parse(storedValue);
    } catch {
      return initialState;
    }
  });
  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key],
  );
  return [value, setValue];
}
