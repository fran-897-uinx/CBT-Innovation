import { useState } from "react";
import {
  Book,
  ClipboardList,
  MessageCircle,
  Users,
  Video,
  Newspaper,
  User,
  KeyIcon,
} from "lucide-react";

import CourseSettings from "../Settings/CourseSettings";
import ExamSettings from "../Settings/ExamSettings";
import MessageSettings from "../Settings/MessageSettings";
import GroupSettings from "../Settings/GroupSettings";
import VideoSettings from "../Settings/VideoSettings";
import NewsSettings from "../Settings/NewsSettings";
import ProfileSettings from "../Settings/ProfileSettings";
import ThemeSettings from "../Settings/ThemeSetting";
import { SunMoon } from "lucide-react";

const tabs = [
  { key: "course", icon: Book, label: "Courses" },
  { key: "exam", icon: ClipboardList, label: "Exams" },
  { key: "message", icon: MessageCircle, label: "Messages" },
  { key: "group", icon: Users, label: "Groups" },
  { key: "video", icon: Video, label: "Video Sessions" },
  { key: "news", icon: Newspaper, label: "Daily News" },
  { key: "profile", icon: User, label: "Profile" },
  { key: "theme", icon: SunMoon, label: "Theme" },
];

export default function SettingsLayout() {
  const [active, setActive] = useState("course");

  return (
    <div className="min-h-screen bg-background flex flex-col md:flex-row">
      {/* ===== Mobile Tabs ===== */}
      <div className="md:hidden border-b overflow-x-auto py-3 ">
        <div className="flex w-max">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = active === tab.key;

            return (
              <button
                key={tab.key}
                onClick={() => setActive(tab.key)}
                className={`flex items-center gap-2 px-4 py-3 text-sm whitespace-nowrap border-b-2 transition
                  ${
                    isActive
                      ? "border-blue-600 text-blue-600 font-medium"
                      : "border-transparent text-gray-600"
                  }`}
              >
                <Icon size={16} />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* ===== Desktop Sidebar ===== */}
      <aside className="hidden md:block w-64 bg-background border-r">
        <h2 className="px-6 py-4 font-semibold text-foreground">Settings</h2>

        <nav className="space-y-1">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = active === tab.key;

            return (
              <button
                key={tab.key}
                onClick={() => setActive(tab.key)}
                className={`w-full flex items-center gap-3 px-6 py-3 text-sm transition
                  ${
                    isActive
                      ? "bg-blue-50 text-blue-600 border-r-4 border-blue-600"
                      : "text-forground hover:bg-muted"
                  }`}
              >
                <Icon size={20} />
                {tab.label}
              </button>
            );
          })}
        </nav>
      </aside>

      {/* ===== Content ===== */}
      <main className="flex-1 p-4 md:p-6 overflow-y-auto">
        {active === "course" && <CourseSettings />}
        {active === "exam" && <ExamSettings />}
        {active === "message" && <MessageSettings />}
        {active === "group" && <GroupSettings />}
        {active === "video" && <VideoSettings />}
        {active === "news" && <NewsSettings />}
        {active === "profile" && <ProfileSettings />}
        {active === "theme" && <ThemeSettings />}
      </main>
    </div>
  );
}
