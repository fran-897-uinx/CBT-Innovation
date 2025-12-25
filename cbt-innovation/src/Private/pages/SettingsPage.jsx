import React from "react";
import {
  AccessibilityIcon,
  BellRingIcon,
  CheckCheck,
  CircleQuestionMarkIcon,
  DatabaseZapIcon,
  Key,
  LanguagesIcon,
  LayoutList,
  LockKeyhole,
  MessageSquareTextIcon,
  PlusCircle,
  QrCode,
  User,
  UserSquare2,
  UsersRound,
} from "lucide-react";
import { Link } from "react-router-dom";

const SettingsItem = [
  {
    id: 1,
    icon: <Key size={19} />,
    name: "acount",
    note: "Edit profile, add account and change number",
    to: "/app/settings/account/",
  },
  {
    id: 2,
    icon: <LockKeyhole size={19} />,
    name: "privacy",
    note: "Block contacts, disappearing messages",
    to: "/app/settings/privacy/",
  },
  {
    id: 3,
    icon: <User size={19} />,
    name: "avatar",
    note: "create, edit, profile Photo",
    to: "/app/settings/avatar/",
  },
  {
    id: 4,
    icon: <LayoutList size={19} />,
    name: "Lists",
    note: "Manage people and groups",
    to: "/app/settings/lists/",
  },
  {
    id: 5,
    icon: <MessageSquareTextIcon size={19} />,
    name: "Chat",
    note: "Theme, wallpapers, chat history",
    to: "/app/settings/chatSystem/",
  },
  {
    id: 6,
    icon: <BellRingIcon size={19} />,
    name: "notification",
    note: "Message, group & call tones",
    to: "/app/settings/notification/",
  },
  {
    id: 7,
    icon: <DatabaseZapIcon size={19} />,
    name: "Storage and data",
    note: "Network usage, auto-download",
    to: "/app/settings/storage/",
  },
  {
    id: 8,
    icon: <AccessibilityIcon size={19} />,
    name: "Accessibility",
    note: "Increase contrast, animation",
    to: "/app/settings/accessibilty/",
  },
  {
    id: 9,
    icon: <LanguagesIcon size={19} />,
    name: "App Language",
    note: "English (device Language)",
    to: "/app/settings/language/",
  },
  {
    id: 10,
    icon: <CircleQuestionMarkIcon size={19} />,
    name: "Help and feedback",
    note: "Help centre, contact us, privavy policy",
    to: "/app/settings/help/",
  },
  {
    id: 11,
    icon: <UsersRound size={19} />,
    name: "Invite A Friend",
    to: "/app/settings/invite/",
  },
  {
    id: 12,
    icon: <CheckCheck size={19} />,
    name: "App Update",
    to: "/app/settings/update/",
  },
];

const SettingsPage = () => {
  return (
    <>
      {/* User Profile bar */}
      <Link to="/app/settings/profileedit/">
        <div className="px-3 py-6 flex items-center gap-3 p-2 rounded-md hover:bg-gray-100 transition bg-gray-100 border border-gray-200 mb-5">
          {/* Avatar */}
          <div className="w-9 h-9 rounded-full bg-blue-600 text-gray-300 flex items-center justify-center text-sm font-semibold">
            DF
          </div>

          {/* User Info */}
          <div className="flex-1 leading-tight">
            <p className="text-sm font-medium text-gray-800">David Francis</p>
            <p className="text-xs text-gray-500">
              Always Online and ready to attend to your problems{" "}
            </p>
          </div>

          {/* Icon */}
          <Link to="/app/settings/adddevicewithQRcode/">
            <QrCode size={20} className="text-stone-900" />
          </Link>
          <Link to="/app/settings/adddevice/">
            <PlusCircle size={20} className="text-stone-900" />
          </Link>
        </div>
      </Link>
      {/* Other Settngs features  */}
      {SettingsItem.map((value) => (
        <Link key={value.id} to={value.to}>
          <div className="group flex items-center justify-between px-4 py-2.5 rounded-md transition bg-stone-200 mt-3 cursor-pointer">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl flex items-center justify-center">
                {value.icon}
              </span>
              <div>
                <span className="text-sm font-medium">{value.name}</span>
                <p className="text-xs grayscale text-stone-800">{value.note}</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default SettingsPage;
