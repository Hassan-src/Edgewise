import { useLayoutEffect, useState, type PropsWithChildren } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";
import { AppContext } from "./AppContext";

type AppProviderProps = PropsWithChildren;

function AppProvider({ children }: AppProviderProps) {
  const [isDarkMode, setIsDarkMode] = useLocalStorageState(
    window.matchMedia("(prefers-color-scheme: dark)").matches,
    "isDarkMode",
  );
  const [resize, setResize] = useState(false);

  useLayoutEffect(() => {
    const theme = isDarkMode ? "dark-mode" : "light-mode";

    document.documentElement.classList.remove("dark-mode", "light-mode");

    document.documentElement.classList.add(theme);
  }, [isDarkMode]);
  function toggleDarkMode() {
    setIsDarkMode((isDark) => !isDark);
  }
  function handleResize() {
    setResize((resize) => !resize);
  }
  return (
    <AppContext.Provider
      value={{ isDarkMode, toggleDarkMode, resize, handleResize }}
    >
      {children}
    </AppContext.Provider>
  );
}

export { AppProvider };
