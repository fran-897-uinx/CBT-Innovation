import React, { useState } from "react";

export default function ChatSystemPage() {
  const [theme, setTheme] = useState("light");
//   const [wallpaper, setWallpaper] = useState(null);

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Chat Settings</h2>
      <div className="space-y-4 max-w-md">
        <div>
          <label className="block text-sm font-medium text-gray-700">Theme</label>
          <select value={theme} onChange={(e) => setTheme(e.target.value)} className="w-full border rounded-xl p-2 mt-1">
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Wallpaper</label>
          {/* <input type="file" onChange={(e) => setWallpaper(e.target.files[0])} className="w-full mt-1"/> */}
        </div>
      </div>
    </div>
  );
}
