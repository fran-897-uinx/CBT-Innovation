import { X, Check } from "lucide-react";
import { useState } from "react";

export default function AddMembersModal({
  members,
  allUsers,
  onAddMembers,
  onClose,
}) {
  const memberIds = members.map((m) => m.id);
  const availableUsers = allUsers.filter(
    (u) => !memberIds.includes(u.id)
  );

  const [selected, setSelected] = useState([]);

  const toggleUser = (user) => {
    setSelected((prev) =>
      prev.some((u) => u.id === user.id)
        ? prev.filter((u) => u.id !== user.id)
        : [...prev, user]
    );
  };

  const handleAdd = () => {
    if (!selected.length) return;
    onAddMembers(selected);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-md p-6 rounded-xl relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3"
        >
          <X size={18} />
        </button>

        <h2 className="text-lg font-semibold mb-1">
          Add members
        </h2>
        <p className="text-xs text-gray-500 mb-4">
          Select users to add
        </p>

        <div className="max-h-60 overflow-y-auto space-y-1 mb-4">
          {availableUsers.map((user) => {
            const isSelected = selected.some(
              (u) => u.id === user.id
            );

            return (
              <button
                key={user.id}
                onClick={() => toggleUser(user)}
                className={`w-full flex justify-between px-4 py-2 rounded-lg ${
                  isSelected
                    ? "bg-gray-900 text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                <span>{user.name}</span>
                {isSelected && <Check size={16} />}
              </button>
            );
          })}
        </div>

        <button
          onClick={handleAdd}
          disabled={!selected.length}
          className="w-full bg-gray-900 text-white py-2 rounded-xl disabled:opacity-40"
        >
          Add {selected.length || ""} member
          {selected.length > 1 ? "s" : ""}
        </button>
      </div>
    </div>
  );
}
