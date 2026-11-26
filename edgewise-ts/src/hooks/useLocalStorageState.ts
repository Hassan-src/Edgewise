import { useEffect, useState } from "react";

export function useLocalStorageState<T>(initialState: T, key: string) {
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem(key);
    if (storedValue === null || storedValue === "undefined") {
      return initialState;
    }
    try {
      return JSON.parse(storedValue) as T;
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
  return [value, setValue] as const;
}
