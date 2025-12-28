import React, { useState } from "react";
import { Link } from "react-router-dom";
import CreateGroupModal from "./Create";
import CreateGroupButton from "./Createbutton";

const groups = [
  {
    id: 1,
    name: "UTME 2025",
    members: 1200,
    img: "/undraw_fill-the-blank_n29z.svg",
    recommended: true,
  },
  {
    id: 2,
    name: "WAEC Math",
    members: 800,
    img: "/undraw_fill-the-blank_n29z.svg",
    recommended: false,
  },
  {
    id: 3,
    name: "Global Scholarships",
    members: 450,
    recommended: true,
  },
  {
    id: 4,
    name: "Python Learners",
    members: 300,
    recommended: false,
  },
];

export default function GroupPage() {
  const [showCreate, setShowCreate] = useState(false);

  const recommendedGroups = groups.filter((g) => g.recommended);
  const otherGroups = groups.filter((g) => !g.recommended);

  const handleCreateGroup = (group) => {
    console.log("Create group payload →", group);
    // TODO: POST /groups API
    setShowCreate(false);
  };

  const renderGroupCard = (group) => (
    <div
      key={group.id}
      className="border rounded-xl p-4 bg-white hover:shadow-md transition flex flex-col items-center text-center"
    >
      {group.img ? (
        <img
          src={group.img}
          alt={group.name}
          className="w-24 h-24 object-cover rounded-2xl mb-3 border border-gray-200"
        />
      ) : (
        <div className="w-24 h-24 flex items-center justify-center bg-gray-100 rounded-2xl mb-3 text-gray-400 text-xs">
          No Image
        </div>
      )}

      <p className="font-medium text-gray-800">{group.name}</p>
      <p className="text-sm text-gray-500">{group.members} members</p>

      <Link
        to={`/app/groups/${group.id}`}
        className="mt-3 w-full bg-gray-900 text-white py-2 rounded-xl hover:bg-gray-800 transition"
      >
        Join
      </Link>
    </div>
  );

  return (
    <div className="p-4 pb-24 relative">
      {/* Recommended */}
      <h1 className="text-lg font-semibold mb-4">Recommended Groups</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {recommendedGroups.map(renderGroupCard)}
      </div>

      {/* All Groups */}
      <h1 className="text-lg font-semibold mb-4">All Groups</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {otherGroups.map(renderGroupCard)}
      </div>

      {/* Map Placeholder */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-2">Map View</h2>
        <div className="w-full h-64 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500 text-sm">
          Map placeholder (coming soon)
        </div>
      </div>

      {/* Floating Create Button */}
      <CreateGroupButton onClick={() => setShowCreate(true)} />

      {/* Create Group Modal */}
      {showCreate && (
        <CreateGroupModal
          onClose={() => setShowCreate(false)}
          onCreate={handleCreateGroup}
        />
      )}
    </div>
  );
}
