import React, { useState } from "react";
import { Link } from "react-router-dom";
import CreateGroupModal from "./Create";
import CreateGroupButton from "./Createbutton";

const initialGroups = [
  {
    id: 1,
    name: "UTME 2025",
    members: 1200,
    img: "/undraw_fill-the-blank_n29z.svg",
    desc: "This is the group of death and life",
    recommended: true,
    joined: false,
  },
  {
    id: 2,
    name: "WAEC Math",
    members: 800,
    img: "/undraw_fill-the-blank_n29z.svg",
    desc: "",
    recommended: false,
    joined: false,
  },
  {
    id: 3,
    name: "Global Scholarships",
    members: 450,
    desc: "Life is all about counting",
    recommended: true,
    joined: false,
  },
  {
    id: 4,
    name: "Python Learners",
    members: 300,
    desc: "",
    recommended: false,
    joined: false,
  },
];

export default function GroupPage() {
  const [groups, setGroups] = useState(initialGroups);
  const [showCreate, setShowCreate] = useState(false);

  const joinedGroups = groups.filter((g) => g.joined);
  const recommendedGroups = groups.filter((g) => g.recommended && !g.joined);
  const otherGroups = groups.filter((g) => !g.recommended && !g.joined);

  const handleCreateGroup = (group) => {
    setGroups((prev) => [
      { ...group, id: Date.now(), members: 1, joined: true },
      ...prev,
    ]);
    setShowCreate(false);
  };

  const renderGroupCard = (group) => (
    <div
      key={group.id}
      className="border rounded-xl p-4 bg-green-900 hover:shadow-md transition flex flex-col items-center text-center focus-within:ring-2 focus-within:ring-gray-900"
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

      {group.desc && (
        <p className="text-xs text-gray-400 line-clamp-2 mt-1">{group.desc}</p>
      )}

      <p className="text-sm text-gray-500 mt-1">{group.members} members</p>

      <Link
        to={`/app/groups/${group.id}`}
        className="mt-3 w-full bg-gray-900 text-white py-2 rounded-xl hover:bg-gray-800 transition text-sm"
      >
        {group.joined ? "Open Group" : "Join"}
      </Link>
    </div>
  );

  return (
    <div className="p-4 pb-28 relative">
      {/* Joined */}
      <h1 className="text-lg font-semibold mb-4">Joined Groups</h1>

      {joinedGroups.length === 0 ? (
        <p className="text-sm text-gray-500 mb-6">
          You have not joined any group yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
          {joinedGroups.map(renderGroupCard)}
        </div>
      )}

      {/* Recommended */}
      <h1 className="text-lg font-semibold mb-4">Recommended Groups</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
        {recommendedGroups.map(renderGroupCard)}
      </div>

      {/* All */}
      <h1 className="text-lg font-semibold mb-4">All Groups</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {otherGroups.map(renderGroupCard)}
      </div>

      {/* Map */}
      <div className="mt-10">
        <h2 className="text-lg font-semibold mb-2">Map View</h2>
        <div className="w-full h-64 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500 text-sm">
          Map placeholder (coming soon)
        </div>
      </div>

      {/* Floating Create */}
      <CreateGroupButton onClick={() => setShowCreate(true)} />

      {showCreate && (
        <CreateGroupModal
          onClose={() => setShowCreate(false)}
          onCreate={handleCreateGroup}
        />
      )}
    </div>
  );
}
