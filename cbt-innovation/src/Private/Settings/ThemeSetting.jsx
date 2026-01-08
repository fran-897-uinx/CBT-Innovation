import { Moon, Sun, Palette } from "lucide-react";
import { useTheme } from "../../theme/theme.context";

export default function ThemeSettings() {
  const { theme, toggleMode, toggleBackground } = useTheme();

  return (
    <div className="max-w-md mx-auto rounded-2xl border p-5 space-y-6 bg-background text-foreground shadow-sm">
      <div>
        <h2 className="text-lg font-semibold">Appearance</h2>
        <p className="text-sm text-muted">
          Customize how TestPrepAcademy looks on your device
        </p>
      </div>

      {/* Mode */}
      <div className="space-y-2">
        <p className="text-sm font-medium">Color mode</p>

        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={toggleMode}
            className={`flex items-center justify-center gap-2 rounded-xl border px-4 py-3 transition
              ${
                theme.mode === "light"
                  ? "border-blue-600 bg-blue-50 text-blue-700"
                  : "hover:bg-muted"
              }`}
          >
            <Sun size={18} />
            Light
          </button>

          <button
            onClick={toggleMode}
            className={`flex items-center justify-center gap-2 rounded-xl border px-4 py-3 transition
              ${
                theme.mode === "dark"
                  ? "border-blue-600 bg-blue-50 text-blue-700"
                  : "hover:bg-muted"
              }`}
          >
            <Moon size={18} />
            Dark
          </button>
        </div>
      </div>

      {/* Background */}
      <div className="space-y-2">
        <p className="text-sm font-medium">Background style</p>

        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={toggleBackground}
            className={`flex items-center justify-center gap-2 rounded-xl border px-4 py-3 transition
              ${
                theme.background === "solid"
                  ? "border-purple-600 bg-purple-50 text-purple-700"
                  : "hover:bg-muted"
              }`}
          >
            <Palette size={18} />
            Solid
          </button>

          <button
            onClick={toggleBackground}
            className={`flex items-center justify-center gap-2 rounded-xl border px-4 py-3 transition
              ${
                theme.background === "gradient"
                  ? "border-purple-600 bg-purple-50 text-purple-700"
                  : "hover:bg-muted"
              }`}
          >
            <Palette size={18} />
            Gradient
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="text-xs text-muted border-t pt-4">
        Changes apply instantly and are saved automatically.
      </div>
    </div>
  );
}
