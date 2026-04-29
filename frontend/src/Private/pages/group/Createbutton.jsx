import { Plus } from "lucide-react";

export default function CreateGroupButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="fixed  bottom-14 md:bottom-6 right-2 md:right-6 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-gray-900 text-white shadow-lg hover:bg-gray-800 transition"
      aria-label="Create group"
    >
      <Plus size={24} />
    </button>
  );
}
