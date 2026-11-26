import { createContext } from "react";

type AppContextProps = {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  resize: boolean;
  handleResize: () => void;
};

export const AppContext = createContext<AppContextProps | null>(null);
