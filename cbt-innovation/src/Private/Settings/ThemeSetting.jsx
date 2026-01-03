import { useState } from "react";

const GRADIENTS = [
  {
    id: "blue",
    value: "linear-gradient(135deg, #2563eb, #0f172a)",
  },
  {
    id: "green",
    value: "linear-gradient(135deg, #22c55e, #064e3b)",
  },
  {
    id: "purple",
    value: "linear-gradient(135deg, #7c3aed, #1e1b4b)",
  },
];

export default function ThemeSettings() {
  const [mode, setMode] = useState("light");
  const [bgType, setBgType] = useState("solid");
  const [gradient, setGradient] = useState(GRADIENTS[0].value);

  return (
    <div className="max-w-2xl space-y-6">
      <h1 className="text-xl font-semibold">Theme Settings</h1>

      {/* Mode */}
      <section className="bg-white border rounded-xl p-4 space-y-3">
        <h2 className="font-medium">Theme Mode</h2>
        <div className="flex gap-3">
          {["light", "dark"].map((m) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={`px-4 py-2 rounded-lg border ${
                mode === m
                  ? "bg-gray-900 text-white"
                  : "bg-gray-100"
              }`}
            >
              {m}
            </button>
          ))}
        </div>
      </section>

      {/* Background Type */}
      <section className="bg-white border rounded-xl p-4 space-y-3">
        <h2 className="font-medium">Background Style</h2>

        <div className="flex gap-3">
          {["solid", "gradient"].map((type) => (
            <button
              key={type}
              onClick={() => setBgType(type)}
              className={`px-4 py-2 rounded-lg border ${
                bgType === type
                  ? "ring-2 ring-blue-600"
                  : ""
              }`}
            >
              {type.toUpperCase()}
            </button>
          ))}
        </div>
      </section>

      {/* Gradient Picker */}
      {bgType === "gradient" && (
        <section className="bg-white border rounded-xl p-4 space-y-3">
          <h2 className="font-medium">Choose Gradient</h2>

          <div className="grid grid-cols-3 gap-3">
            {GRADIENTS.map((g) => (
              <button
                key={g.id}
                onClick={() => setGradient(g.value)}
                className={`h-16 rounded-lg border ${
                  gradient === g.value
                    ? "ring-2 ring-blue-600"
                    : ""
                }`}
                style={{ background: g.value }}
              />
            ))}
          </div>
        </section>
      )}

      {/* Preview */}
      <section className="border rounded-xl p-6">
        <h3 className="text-sm font-medium mb-2">Preview</h3>

        <div
          className="h-40 rounded-lg flex items-center justify-center font-semibold"
          style={{
            background:
              bgType === "solid"
                ? mode === "dark"
                  ? "#0f172a"
                  : "#ffffff"
                : gradient,
            color: mode === "dark" ? "#ffffff" : "#111827",
          }}
        >
          Theme Preview
        </div>
      </section>

      {/* Save */}
      <div className="flex justify-end">
        <button className="bg-gray-900 text-white px-6 py-2 rounded-lg">
          Save Theme
        </button>
      </div>
    </div>
  );
}
