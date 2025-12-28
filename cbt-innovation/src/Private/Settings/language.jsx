import React, { useState } from "react";

export default function LanguagePage() {
  const [language, setLanguage] = useState("English");

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">App Language</h2>
      <div className="max-w-md">
        <label className="block text-sm font-medium text-gray-700">Select Language</label>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="w-full border rounded-xl p-2 mt-1"
        >
          <option>English</option>
          <option>French</option>
          <option>Spanish</option>
          <option>Arabic</option>
        </select>
      </div>
    </div>
  );
}
