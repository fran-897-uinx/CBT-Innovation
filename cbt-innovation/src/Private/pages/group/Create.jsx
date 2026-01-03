import { X, Users } from "lucide-react";
import { useState } from "react";

export default function CreateGroupModal({ onClose, onCreate }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleCreate = () => {
    if (!name.trim()) return;

    onCreate({
      name,
      description,
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b">
          <h3 className="font-semibold text-gray-800">Create Group</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800"
          >
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 space-y-4">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-amber-900 text-white flex items-center justify-center mb-3">
              <Users size={28} />
            </div>
            <p className="text-xs text-gray-500">You will be the group admin</p>
          </div>

          <input
            className="w-full border rounded-xl px-4 py-2"
            placeholder="Group name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <textarea
            className="w-full border rounded-xl px-4 py-2 resize-none"
            placeholder="Description (optional)"
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        {/* Footer */}
        <div className="px-5 py-4 border-t">
          <button
            onClick={handleCreate}
            className="w-full bg-gray-900 text-white py-2 rounded-xl hover:bg-gray-800 transition"
          >
            Create Group
          </button>
        </div>
      </div>
    </div>
  );
}
