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
  UsersRound,
} from "lucide-react";
import { Link } from "react-router-dom";

const SETTINGS_ITEMS = [
  {
    id: 1,
    icon: Key,
    name: "Account",
    note: "Edit profile, add account and change number",
    to: "/app/settings/account",
  },
  {
    id: 2,
    icon: LockKeyhole,
    name: "Privacy",
    note: "Block contacts, disappearing messages",
    to: "/app/settings/privacy",
  },
  {
    id: 3,
    icon: User,
    name: "Avatar",
    note: "Create, edit profile photo",
    to: "/app/settings/avatar",
  },
  {
    id: 4,
    icon: LayoutList,
    name: "Lists",
    note: "Manage people and groups",
    to: "/app/settings/lists",
  },
  {
    id: 5,
    icon: MessageSquareTextIcon,
    name: "Chat",
    note: "Theme, wallpapers, chat history",
    to: "/app/settings/chat-system",
  },
  {
    id: 6,
    icon: BellRingIcon,
    name: "Notifications",
    note: "Message, group & call tones",
    to: "/app/settings/notification",
  },
  {
    id: 7,
    icon: DatabaseZapIcon,
    name: "Storage & Data",
    note: "Network usage, auto-download",
    to: "/app/settings/storage",
  },
  {
    id: 8,
    icon: AccessibilityIcon,
    name: "Accessibility",
    note: "Contrast, animation and motion",
    to: "/app/settings/accessibility",
  },
  {
    id: 9,
    icon: LanguagesIcon,
    name: "App Language",
    note: "English (device language)",
    to: "/app/settings/language",
  },
  {
    id: 10,
    icon: CircleQuestionMarkIcon,
    name: "Help & Feedback",
    note: "Help centre, contact us, privacy policy",
    to: "/app/settings/help",
  },
  {
    id: 11,
    icon: UsersRound,
    name: "Invite a Friend",
    to: "/app/settings/invite",
  },
  {
    id: 12,
    icon: CheckCheck,
    name: "App Updates",
    to: "/app/settings/update",
  },
];

const SettingsRow = ({ icon: Icon, name, note, to }) => (
  <Link
    to={to}
    className="flex items-center justify-between px-4 py-3 rounded-lg bg-stone-100 hover:bg-stone-200 transition"
  >
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-white">
        {Icon && <Icon size={18} />}
      </div>
      <div>
        <p className="text-sm font-medium text-gray-900">{name}</p>
        {note && <p className="text-xs text-gray-600 leading-snug">{note}</p>}
      </div>
    </div>
  </Link>
);

export default function SettingsPage() {
  return (
    <section className="space-y-4">
      {/* Profile Card */}
      <div className="bg-gray-100 border rounded-lg p-4 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-semibold">
          DF
        </div>

        <Link to="/app/settings/profileedit" className="flex-1">
          <p className="text-sm font-medium text-gray-900">David Francis</p>
          <p className="text-xs text-gray-500">
            Always online and ready to help
          </p>
        </Link>

        <div className="flex gap-3">
          <Link
            to="/app/settings/adddevicewithQRcode"
            aria-label="Add device with QR code"
          >
            <QrCode size={20} />
          </Link>

          <Link to="/app/settings/adddevice" aria-label="Add new device">
            <PlusCircle size={20} />
          </Link>
        </div>
      </div>

      {/* Settings Items */}
      {SETTINGS_ITEMS.map((item) => (
        <SettingsRow key={item.id} {...item} />
      ))}
    </section>
  );
}
