import Toggle from "../components/Toggle";
import { useState } from "react";


export default function NewsSettings() {
  const [breaking, setBreaking] = useState(true);
  return (
    <div className="max-w-xl space-y-4">
      <h1 className="text-xl font-semibold">Daily News</h1>

      <label className="flex items-center gap-3">
        <input type="checkbox" />
        Education news
      </label>

      <label className="flex items-center gap-3">
        <input type="checkbox" />
        Scholarships & opportunities
      </label>

      <label className="flex items-center gap-3">
        <input type="checkbox" />
        Tech & innovation
      </label>
      <div className="flex justify-between">
        <span>Breaking news alerts</span>
        <Toggle checked={breaking} onChange={() => setBreaking(!breaking)} />
      </div>

      <input type="time" className="border rounded p-2" defaultValue="08:00" />
    </div>
  );
}
