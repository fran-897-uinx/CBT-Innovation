import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Search,
  MessageSquareText,
  Newspaper,
  FileText,
} from "lucide-react";

const navItems = [
  { to: "/app/dashboard", icon: Home, label: "Home" },
  { to: "/app/search", icon: Search, label: "Search" },
  { to: "/app/messages", icon: MessageSquareText, label: "Messages" },
  { to: "/app/daily-news", icon: Newspaper, label: "News" },
  { to: "/app/registration", icon: FileText, label: "Register" },
];

export default function BottomNav() {
  const { pathname } = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="relative grid grid-cols-5 bg-card border-t border h-14">
        {navItems.map((item) => {
          const active = pathname.startsWith(item.to);
          const Icon = item.icon; // Assign component to uppercase variable

          return (
            <Link
              key={item.to}
              to={item.to}
              className="relative flex flex-col items-center justify-center"
            >
              {/* Active pill */}
              {active && (
                <span className="absolute -top-0 w-10 h-9 bg-gray-500 rounded-2xl transition-all duration-300 scale-100" />
              )}

              {/* Icon must be used here */}
              <Icon
                size={20}
                className={`relative z-10 transition-all duration-300 ${
                  active ? "text-gray-900 scale-110" : "text-gray-500"
                }`}
              />

              <span
                className={`text-[10px] mt-1 transition-opacity duration-300 ${
                  active
                    ? "text-gray-900 font-bold opacity-100 italic"
                    : "opacity-40 h-0"
                }`}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
