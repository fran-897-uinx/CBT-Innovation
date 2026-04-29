import { useEffect, useState } from "react";
import { ThemeContext } from "./theme.context";
import { DEFAULT_THEME } from "./theme.constants";

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? JSON.parse(saved) : DEFAULT_THEME;
  });

  useEffect(() => {
    const root = document.documentElement;

    root.setAttribute("data-theme", theme.mode);
    root.setAttribute("data-bg", theme.background);

    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  const toggleMode = () =>
    setTheme((prev) => ({
      ...prev,
      mode: prev.mode === "light" ? "dark" : "light",
    }));

  const toggleBackground = () =>
    setTheme((prev) => ({
      ...prev,
      background: prev.background === "solid" ? "gradient" : "solid",
    }));

  return (
    <ThemeContext.Provider
      value={{ theme, setTheme, toggleMode, toggleBackground }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
