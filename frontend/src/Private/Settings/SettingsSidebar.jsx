import { NavLink } from "react-router-dom";
import {
  User,
  BookOpen,
  ClipboardList,
  MessageCircle,
  Users,
  Video,
  Newspaper,
} from "lucide-react";

const links = [
  { to: "profile", label: "Profile", icon: User },
  { to: "courses", label: "Courses", icon: BookOpen },
  { to: "exams", label: "Exams", icon: ClipboardList },
  { to: "messages", label: "Messages", icon: MessageCircle },
  { to: "groups", label: "Groups", icon: Users },
  { to: "videos", label: "Video Sessions", icon: Video },
  { to: "news", label: "Daily News", icon: Newspaper },
];

export default function SettingsSidebar() {
  return (
    <aside className="w-64 bg-white border-r p-4 hidden md:block">
      <h2 className="font-semibold text-lg mb-4">Settings</h2>
      <nav className="space-y-1">
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-lg text-sm ${
                  isActive
                    ? "bg-gray-900 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              <Icon size={16} />
              {link.label}
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}
