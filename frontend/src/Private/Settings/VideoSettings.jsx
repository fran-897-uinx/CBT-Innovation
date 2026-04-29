import Toggle from "../components/Toggle";
import { useState } from "react";


export default function VideoSettings() {
  const [muted, setMuted] = useState(true);
  return (
    <div className="max-w-xl space-y-4">
      <h1 className="text-xl font-semibold">Video Session Settings</h1>

      <label className="flex items-center gap-3">
        <input type="checkbox" />
        Auto-join when session starts
      </label>

      <label className="flex items-center gap-3">
        <input type="checkbox" />
        Enable camera by default
      </label>

      <label className="flex items-center gap-3">
        <input type="checkbox" />
        Enable microphone by default
      </label>
            <div className="flex justify-between">
        <span>Join muted</span>
        <Toggle checked={muted} onChange={() => setMuted(!muted)} />
      </div>

      <select className="w-full border rounded p-2">
        <option>Auto quality</option>
        <option>720p</option>
        <option>1080p</option>
      </select>
    </div>
  );
}
