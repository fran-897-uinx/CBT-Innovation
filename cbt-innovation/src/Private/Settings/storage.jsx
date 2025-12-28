import React, { useState } from "react";

export default function StoragePage() {
  const [autoDownload, setAutoDownload] = useState(true);
  const [networkUsage, setNetworkUsage] = useState("Wi-Fi only");

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Storage & Data</h2>
      <div className="space-y-4 max-w-md">
        <label className="flex items-center justify-between">
          Auto-download media
          <input type="checkbox" checked={autoDownload} onChange={() => setAutoDownload(!autoDownload)} />
        </label>
        <div>
          <label className="block text-sm font-medium text-gray-700">Network Usage</label>
          <select value={networkUsage} onChange={(e) => setNetworkUsage(e.target.value)} className="w-full border rounded-xl p-2 mt-1">
            <option>Wi-Fi only</option>
            <option>Wi-Fi & Mobile</option>
          </select>
        </div>
      </div>
    </div>
  );
}
