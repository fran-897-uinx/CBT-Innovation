import React, { useState } from "react";

export default function AccessibilityPage() {
  const [highContrast, setHighContrast] = useState(false);
  const [reduceAnimation, setReduceAnimation] = useState(false);

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Accessibility</h2>
      <div className="space-y-4 max-w-md">
        <label className="flex items-center justify-between">
          High Contrast Mode
          <input type="checkbox" checked={highContrast} onChange={() => setHighContrast(!highContrast)} />
        </label>
        <label className="flex items-center justify-between">
          Reduce Animations
          <input type="checkbox" checked={reduceAnimation} onChange={() => setReduceAnimation(!reduceAnimation)} />
        </label>
      </div>
    </div>
  );
}
