import React, {
  createContext,
  // useContext,
  useEffect, useState
} from "react";

// 1️⃣ Create the context
const ThemeContext = createContext();

// 2️⃣ Default theme
const DEFAULT_THEME = {
  mode: "light",       // light | dark
  background: "solid", // solid | gradient
};

// 3️⃣ Provider component
export function ThemeProvider({ children }) {
  // Load theme from localStorage or use default
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? JSON.parse(saved) : DEFAULT_THEME;
  });

  // Update CSS variables and localStorage when theme changes
  useEffect(() => {
    const root = document.documentElement;

    // Set data attributes for CSS
    root.setAttribute("data-theme", theme.mode);
    root.setAttribute("data-bg", theme.background);

    // Save to localStorage
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  // 4️⃣ Helper functions
  const toggleMode = () => {
    setTheme((prev) => ({
      ...prev,
      mode: prev.mode === "light" ? "dark" : "light",
    }));
  };

  const toggleBackground = () => {
    setTheme((prev) => ({
      ...prev,
      background: prev.background === "solid" ? "gradient" : "solid",
    }));
  };

  // 5️⃣ Provide values to context
  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleMode, toggleBackground }}>
      <div
        style={{
          background: "var(--bg-style)",
          color: "var(--text-color)",
          minHeight: "100vh",
          transition: "all 0.3s ease",
        }}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}


// export const useTheme = () => {
//   const context = useContext(ThemeContext);
//   if (!context) throw new Error("useTheme must be used within ThemeProvider");
//   return context;
// };
