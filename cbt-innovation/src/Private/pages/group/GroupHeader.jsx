import { Video, List, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function GroupHeader({ groupName, members, onOpenInfo }) {
  const [videoMenu, setVideoMenu] = useState(false);
  const [listMenu, setListMenu] = useState(false);

  return (
    <div className="flex justify-between items-center p-3 border-b bg-background">
      <div>
        <p className="font-semibold">{groupName}</p>
        <p className="text-xs text-gray-500">{members.length} members</p>
      </div>

      <div className="flex gap-2 relative">
        {/* Video dropdown */}
        <div className="relative">
          <button
            onClick={() => {
              setVideoMenu(!videoMenu);
              setListMenu(false);
            }}
            className="p-2 rounded-lg hover:bg-gray-700 flex items-center"
          >
            <Video size={18} />
            <ChevronDown size={16} />
          </button>

          {videoMenu && (
            <Dropdown>
              <Item label="Voice call" />
              <Item label="Video call" />
              <Item label="Share screen" />
            </Dropdown>
          )}
        </div>

        {/* List dropdown */}
        <div className="relative">
          <button
            onClick={() => {
              setListMenu(!listMenu);
              setVideoMenu(false);
            }}
            className="p-2 rounded-lg hover:bg-muted bg-background flex items-center"
          >
            <List size={18} />
          </button>

          {listMenu && (
            <Dropdown>
              <Item label="Group info" onClick={onOpenInfo} />
              <Item label="Mute notifications" mute />
              <Divider />
              <Item label="Leave group" danger />
            </Dropdown>
          )}
        </div>
      </div>
    </div>
  );
}

function Dropdown({ children }) {
  return (
    <div className="absolute right-0 mt-2 w-48 bg-background border rounded-xl shadow-lg z-50">
      {children}
    </div>
  );
}

function Item({ label, onClick, danger }) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left px-4 py-2 text-sm hover:bg-muted ${
        danger ? "text-red-600 hover:bg-red-50" : ""
      }`}
    >
      {label}
    </button>
  );
}

function Divider() {
  return <div className="h-px bg-gray-200 my-1" />;
}
