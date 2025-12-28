import React, { useState } from "react";
import GroupHeader from "./GroupHeader";
import GroupMessages from "./GroupMessage";
import GroupInfoModal from "./GroupInfoModel";
import AddMembersModal from "./Addmembers";

const initialMessages = [
  { id: 1, sender: "Alice", text: "Hello everyone", self: false },
  { id: 2, sender: "You", text: "Hi 👋", self: true },
];

const initialMembers = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

const allUsers = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
  { id: 4, name: "David" },
  { id: 5, name: "Eve" },
];

export default function GroupChatRoom() {
  const [messages, setMessages] = useState(initialMessages);
  const [members, setMembers] = useState(initialMembers);
  const [newMessage, setNewMessage] = useState("");

  const [showInfo, setShowInfo] = useState(false);
  const [showAddMembers, setShowAddMembers] = useState(false);

  const sendMessage = () => {
    if (!newMessage.trim()) return;
    setMessages((prev) => [
      ...prev,
      { id: Date.now(), sender: "You", text: newMessage, self: true },
    ]);
    setNewMessage("");
  };

  const addMembers = (newUsers) => {
    setMembers((prev) => [...prev, ...newUsers]);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* HEADER */}
      <GroupHeader
        groupName="UTME Group"
        members={members}
        onOpenInfo={() => setShowInfo(true)}
      />

      {/* MESSAGES */}
      <GroupMessages messages={messages} />

      {/* INPUT */}
      <div className="flex gap-2 p-3 border-t bg-white">
        <input
          className="flex-1 border rounded-xl px-3 py-2"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          onClick={sendMessage}
          className="bg-gray-900 text-white px-4 rounded-xl"
        >
          Send
        </button>
      </div>

      {/* GROUP INFO */}
      {showInfo && (
        <GroupInfoModal
          group={{
            name: "UTME Group",
            description: "Preparation group for UTME exams",
          }}
          members={members}
          onClose={() => setShowInfo(false)}
          onAddClick={() => {
            setShowInfo(false);
            setShowAddMembers(true);
          }}
        />
      )}

      {/* ADD MEMBERS */}
      {showAddMembers && (
        <AddMembersModal
          members={members}
          allUsers={allUsers}
          onAddMembers={addMembers}
          onClose={() => setShowAddMembers(false)}
        />
      )}
    </div>
  );
}
