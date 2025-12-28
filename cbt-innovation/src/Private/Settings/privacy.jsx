import React, { useState } from "react";

export default function PrivacyPage() {
  const [blockContacts, setBlockContacts] = useState(false);
  const [disappearingMessages, setDisappearingMessages] = useState(false);

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Privacy</h2>
      <div className="space-y-4 max-w-md">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={blockContacts}
            onChange={() => setBlockContacts(!blockContacts)}
            className="rounded"
          />
          Block contacts
        </label>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={disappearingMessages}
            onChange={() => setDisappearingMessages(!disappearingMessages)}
            className="rounded"
          />
          Enable disappearing messages
        </label>
      </div>
    </div>
  );
}
