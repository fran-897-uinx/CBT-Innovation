import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Plus, X } from "lucide-react";

const initialChats = [
  { id: 1, userId: 1, name: "John Doe", last: "Are you ready?" },
];

const allUsers = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Alice Johnson" },
  { id: 3, name: "Michael Smith" },
  { id: 4, name: "Grace Lee" },
];

export default function Messages() {
  const [chats, setChats] = useState(initialChats);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const existingUserIds = chats.map((c) => c.userId);
  const availableUsers = allUsers.filter(
    (u) => !existingUserIds.includes(u.id)
  );

  const startChat = (user) => {
    const newChat = {
      id: Date.now(),
      userId: user.id,
      name: user.name,
      last: "New conversation",
    };

    setChats((prev) => [newChat, ...prev]);
    setShowModal(false);
    navigate(`/app/messages/${newChat.id}`);
  };

  return (
    <div className="pb-20">
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b sticky top-0 bg-white z-20">
        <h1 className="text-lg font-semibold">Messages</h1>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-1 px-3 py-1 rounded-xl bg-gray-900 text-white"
        >
          <Plus size={16} /> New
        </button>
      </div>

      {/* Chats */}
      <div className="space-y-1 p-2">
        {chats.map((chat) => (
          <Link
            key={chat.id}
            to={`/app/messages/${chat.id}`}
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition"
          >
            <div className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center font-semibold">
              {chat.name[0]}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium truncate">{chat.name}</p>
              <p className="text-sm text-gray-500 truncate">{chat.last}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* New Chat Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white w-full max-w-sm rounded-xl p-6 relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-500"
            >
              <X size={18} />
            </button>

            <h2 className="text-lg font-semibold mb-3">
              Start a new chat
            </h2>

            <div className="space-y-2 max-h-72 overflow-y-auto">
              {availableUsers.length === 0 && (
                <p className="text-sm text-gray-500 text-center py-6">
                  No new users available
                </p>
              )}

              {availableUsers.map((user) => (
                <button
                  key={user.id}
                  onClick={() => startChat(user)}
                  className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition text-left"
                >
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center font-semibold">
                    {user.name[0]}
                  </div>
                  <span className="font-medium">{user.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
