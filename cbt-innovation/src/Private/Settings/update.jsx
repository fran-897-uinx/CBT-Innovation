import React, { useState } from "react";

export default function UpdatePage() {
  const [version] = useState("v1.0.0");
  const [updateAvailable, setUpdateAvailable] = useState(true);

  const handleUpdate = () => {
    alert("App updated successfully!");
    setUpdateAvailable(false);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">App Update</h2>
      <div className="max-w-md space-y-4">
        <p>Current Version: {version}</p>
        {updateAvailable ? (
          <button
            onClick={handleUpdate}
            className="bg-gray-900 text-white px-4 py-2 rounded-xl hover:bg-gray-800"
          >
            Update App
          </button>
        ) : (
          <p className="text-green-600 font-medium">App is up to date!</p>
        )}
      </div>
    </div>
  );
}
