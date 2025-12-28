import React, { useState } from "react";

export default function InvitePage() {
  const [email, setEmail] = useState("");

  const handleInvite = () => {
    alert(`Invitation sent to ${email}`);
    setEmail("");
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Invite a Friend</h2>
      <div className="max-w-md space-y-4">
        <input
          type="email"
          placeholder="Friend's email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border rounded-xl px-3 py-2 focus:ring-1 focus:ring-gray-800"
        />
        <button
          onClick={handleInvite}
          className="bg-gray-900 text-white px-4 py-2 rounded-xl hover:bg-gray-800"
        >
          Send Invite
        </button>
      </div>
    </div>
  );
}
