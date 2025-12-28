import React, { useState } from "react";

export default function HelpPage() {
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    alert("Feedback submitted!"); // Replace with API call
    setMessage("");
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Help & Feedback</h2>
      <div className="max-w-md space-y-4">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          placeholder="Write your feedback or query..."
          className="w-full border rounded-xl p-3 focus:ring-1 focus:ring-gray-800"
        />
        <button
          onClick={handleSubmit}
          className="bg-gray-900 text-white px-4 py-2 rounded-xl hover:bg-gray-800"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
