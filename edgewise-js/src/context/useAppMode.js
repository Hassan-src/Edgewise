import { useContext } from "react";
import { AppContext } from "./AppContext";

export function useAppMode() {
  const context = useContext(AppContext);
  if (context === undefined)
    throw new Error("Context was used outside of dark mode provider");
  return context;
}
