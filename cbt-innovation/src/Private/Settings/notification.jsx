import React, { useState } from "react";

export default function NotificationPage() {
  const [messageTones, setMessageTones] = useState(true);
  const [groupTones, setGroupTones] = useState(true);
  const [callTones, setCallTones] = useState(false);

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Notifications</h2>
      <div className="space-y-4 max-w-md">
        <label className="flex items-center justify-between">
          Message Tones
          <input type="checkbox" checked={messageTones} onChange={() => setMessageTones(!messageTones)} />
        </label>
        <label className="flex items-center justify-between">
          Group Tones
          <input type="checkbox" checked={groupTones} onChange={() => setGroupTones(!groupTones)} />
        </label>
        <label className="flex items-center justify-between">
          Call Tones
          <input type="checkbox" checked={callTones} onChange={() => setCallTones(!callTones)} />
        </label>
      </div>
    </div>
  );
}
