import React from "react";

const mockLists = [
  { id: 1, name: "UTME 2025 Group" },
  { id: 2, name: "WAEC SSCE Math" },
];

export default function ListsPage() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Lists</h2>
      <div className="space-y-2 max-w-md">
        {mockLists.map((l) => (
          <div key={l.id} className="flex justify-between items-center border rounded-xl p-3">
            <span>{l.name}</span>
            <button className="text-sm text-blue-600">View</button>
          </div>
        ))}
      </div>
    </div>
  );
}
