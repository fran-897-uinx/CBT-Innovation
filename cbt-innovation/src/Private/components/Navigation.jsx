import React from "react";
import { Link, useLocation } from "react-router-dom";
// import { useState } from "react";
import {
  Home,
  BookOpen,
  FileText,
  MessageCircle,
  Video,
  Settings,
  LogOut,
  // GraduationCap,
  LucideNewspaper,
  GroupIcon,
  ChevronRight,
  Newspaper,
} from "lucide-react";
import { UserSquare2 } from "lucide-react";

const SidebarLink = ({ to, label, icon, badge, collapsed }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`group flex items-center ${
        collapsed ? "justify-center" : "justify-between"
      } px-4 py-2.5 rounded-md transition
      ${
        isActive
          ? "bg-blue-50 text-blue-700 border-l-4 border-blue-600"
          : "text-gray-700 hover:bg-gray-100"
      }`}
      title={collapsed ? label : ""}
    >
      <div className="flex items-center gap-3">
        <span
          className={`${
            isActive
              ? "text-blue-600"
              : "text-gray-500 group-hover:text-gray-700"
          }`}
        >
          {icon}
        </span>

        {!collapsed && (
          <span className="text-sm font-medium">{label}</span>
        )}
      </div>

      {!collapsed && badge > 0 && (
        <span className="bg-red-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
          {badge}
        </span>
      )}
    </Link>
  );
};
export default function AppSidebar({ collapsed, onToggle }) {
  return (
    <aside
      className={`fixed left-0 top-0 h-full ${
        collapsed ? "w-20" : "w-64"
      } bg-gray-300 flex flex-col transition-all duration-300`}
    >
      {/* Brand */}
      <div className="flex items-center justify-between px-4 pt-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center">
            <span className="text-white font-bold">TP</span>
          </div>
          {!collapsed && (
            <h1 className="text-xl font-bold text-gray-900">TestPrep</h1>
          )}
        </div>

        {/* Collapse Button */}
        <button
          onClick={onToggle}
          className="hidden md:flex p-1 rounded-md hover:bg-gray-900 bg-gray-700 text-gray-500 cursor-pointer ml-2"
        >
          <ChevronRight
            className={`transition-transform ${
              collapsed ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-2 space-y-6 overflow-y-auto">
        {/* MAIN */}
        <div>
          {!collapsed && (
            <p className="px-2 mb-2 text-xs font-semibold text-gray-400 uppercase">
              Main
            </p>
          )}
          <SidebarLink to="/app/dashboard" label="Dashboard" icon={<Home size={18} />} collapsed={collapsed} />
          <SidebarLink to="/app/courses" label="Courses library" icon={<BookOpen size={18} />} collapsed={collapsed} />
          <SidebarLink to="/app/exams" label="Exams" icon={<FileText size={18} />} collapsed={collapsed} />
        </div>

        {/* COMMUNICATION */}
        <div>
          {!collapsed && (
            <p className="px-2 mb-2 text-xs font-semibold text-gray-400 uppercase">
              Communication
            </p>
          )}
          <SidebarLink to="/app/messages" label="Messages" icon={<MessageCircle size={18} />} badge={3} collapsed={collapsed} />
          <SidebarLink to="/app/Groups" label="Groups" icon={<GroupIcon size={20} />} badge={13} collapsed={collapsed} />
          <SidebarLink to="/app/video-sessions" label="Video Sessions" icon={<Video size={18} />} collapsed={collapsed} />
          <SidebarLink to="/app/daily-news" label="Daliy News" icon={<Newspaper size={18} />} collapsed={collapsed} />
        </div>

        {/* SETTINGS */}
        <div>
          <SidebarLink to="/app/settings" label="Settings" icon={<Settings size={18} />} collapsed={collapsed} />
        </div>
      </nav>

      {/* Profile */}
      <div className="px-3 py-4">
        <Link to="/app/profile" className="flex items-center justify-center gap-3">
          <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-semibold">
            DF
          </div>
          {!collapsed && (
            <div className="text-sm">
              <p className="font-medium">David Francis</p>
              <p className="text-xs text-gray-500">View profile</p>
            </div>
          )}
        </Link>
      </div>
    </aside>
  );
}
