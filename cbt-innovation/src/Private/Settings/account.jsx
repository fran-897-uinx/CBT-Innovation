import React, { useState } from "react";

export default function AccountPage() {
  const [name, setName] = useState("David Francis");
  const [email, setEmail] = useState("david@example.com");
  const [phone, setPhone] = useState("+234 8012345678");

  const handleSave = () => {
    alert("Profile updated!");
    // Here you would call your API to update profile
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Account</h2>
      <div className="space-y-4 max-w-md">
        <div>
          <label className="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            className="w-full border rounded-xl px-3 py-2 mt-1 focus:ring-1 focus:ring-gray-800"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            className="w-full border rounded-xl px-3 py-2 mt-1 focus:ring-1 focus:ring-gray-800"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Phone</label>
          <input
            className="w-full border rounded-xl px-3 py-2 mt-1 focus:ring-1 focus:ring-gray-800"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <button
          onClick={handleSave}
          className="bg-gray-900 text-white px-4 py-2 rounded-xl hover:bg-gray-800"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}
