import { createContext, useLayoutEffect, useState } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

const AppContext = createContext(undefined);

function AppProvider({ children }) {
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

export { AppProvider, AppContext };
