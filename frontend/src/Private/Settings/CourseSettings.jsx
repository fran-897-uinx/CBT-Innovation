import Toggle from "../components/Toggle";
import { useState } from "react";


export default function CourseSettings() {
  const [reminder, setReminder] = useState(true);
  const [offline, setOffline] = useState(false);
  return (
    <div className="max-w-xl space-y-4">
      <h1 className="text-xl font-semibold">Course Preferences</h1>

      <label className="flex items-center gap-3">
        <input type="checkbox" />
        Show recommended courses
      </label>

      <label className="flex items-center gap-3">
        <input type="checkbox" />
        Auto-enroll after purchase
      </label>

      <label className="flex items-center gap-3">
        <input type="checkbox" />
        Enable wishlist
      </label>
      
      <div className="flex justify-between">
        <span>Course reminders</span>
        <Toggle checked={reminder} onChange={() => setReminder(!reminder)} />
      </div>

      <div className="flex justify-between">
        <span>Allow offline download</span>
        <Toggle checked={offline} onChange={() => setOffline(!offline)} />
      </div>
    </div>
  );
}

