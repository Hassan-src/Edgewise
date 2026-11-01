import { useContext } from "react";
import { DarkModeContext } from "./DarkModeContext";

export function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (context === undefined)
    throw new Error("Dark mode context was used outside of dark mode provider");
  return context;
}
