import { useThemeStore } from '../store';
import { DEFAULT_THEME } from "./theme.constants";
import { useEffect } from "react";

export function ThemeProvider({ children }) {
  const { theme, setTheme } = useThemeStore();
  const themeMode = theme?.mode || DEFAULT_THEME.mode;
  const themeBackground = theme?.background || DEFAULT_THEME.background;

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", themeMode);
    root.setAttribute("data-bg", themeBackground);
  }, [themeMode, themeBackground]);

  return children;
}