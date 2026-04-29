import Toggle from "../components/Toggle";
import { useState } from "react";


export default function MessageSettings() {
  const [readReceipt, setReadReceipt] = useState(true);
  return (
    <div className="max-w-xl space-y-4">
      <h1 className="text-xl font-semibold">Message Settings</h1>

      <label className="flex items-center gap-3">
        <input type="checkbox" />
        Allow messages from everyone
      </label>

      <label className="flex items-center gap-3">
        <input type="checkbox" />
        Read receipts
      </label>

      <label className="flex items-center gap-3">
        <input type="checkbox" />
        Typing indicators
      </label>
      <div className="flex justify-between">
        <span>Read receipts</span>
        <Toggle
          checked={readReceipt}
          onChange={() => setReadReceipt(!readReceipt)}
        />
      </div>
    </div>
  );
}
