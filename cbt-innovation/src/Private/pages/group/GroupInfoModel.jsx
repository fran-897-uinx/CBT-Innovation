import { X, Users, Plus, ShieldCheck } from "lucide-react";

export default function GroupInfoModal({
  group,
  members = [],
  currentUserRole = "member", // "admin" | "member"
  onClose,
  onAddClick,
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-md bg-background rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b">
          <h3 className="text-sm font-semibold text-gray-800">
            Group Information
          </h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 transition"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="px-5 py-4 space-y-5">
          {/* Avatar + Meta */}
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-amber-900 text-white flex items-center justify-center shadow">
              <Users size={34} />
            </div>

            <h2 className="mt-3 text-lg font-semibold text-gray-900">
              {group?.name}
            </h2>

            <p className="text-xs text-gray-500">{members.length} members</p>

            {currentUserRole === "admin" && (
              <span className="mt-1 inline-flex items-center gap-1 text-xs text-emerald-600">
                <ShieldCheck size={14} />
                Admin
              </span>
            )}
          </div>

          {/* Description */}
          {group?.description && (
            <p className="text-sm text-gray-600 text-center">
              {group.description}
            </p>
          )}

          {/* Members List */}
          <div className="rounded-xl border overflow-hidden">
            <div className="px-4 py-2 bg-gray-50 text-xs font-semibold text-gray-600">
              Members
            </div>

            <div className="max-h-52 overflow-y-auto divide-y">
              {members.map((member) => (
                <div
                  key={member.id}
                  className="px-4 py-2 flex items-center justify-between hover:bg-gray-50"
                >
                  <span className="text-sm text-gray-800">{member.name}</span>

                  {member.role === "admin" && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700">
                      admin
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-5 py-4 border-t space-y-2">
          {currentUserRole === "admin" && (
            <button
              onClick={onAddClick}
              className="w-full flex items-center justify-center gap-2 bg-gray-900 text-white py-2 rounded-xl hover:bg-gray-800 transition"
            >
              <Plus size={16} />
              Add members
            </button>
          )}

          <button className="w-full text-sm text-red-600 hover:bg-red-50 py-2 rounded-xl transition">
            Leave group
          </button>
        </div>
      </div>
    </div>
  );
}
