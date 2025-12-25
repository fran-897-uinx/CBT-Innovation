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
} from "lucide-react";
import { UserSquare2 } from "lucide-react";

const SidebarLink = ({ to, label, icon, badge }) => {
    const location = useLocation();
    const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`group flex items-center justify-between px-4 py-2.5 rounded-md transition
        ${
          isActive
            ? "bg-blue-50 text-blue-700 border-l-4 border-blue-600"
            : "text-gray-700 hover:bg-gray-100"
        }`}
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
        <span className="text-sm font-medium">{label}</span>
      </div>

      {badge && badge > 0 && (
        <span className="bg-red-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
          {badge}
        </span>
      )}
    </Link>
  );
};

export default function AppSidebar() {
  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-gray-300 flex flex-col">
      {/* Logo / Brand */}
      <div className="flex items-center gap-3 px-5 pt-4">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center">
            <span className="text-white font-bold text-lg">TP</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900">TestPrep</h1>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-6 overflow-y-auto scroll-smooth">
        {/* MAIN */}
        <div>
          <p className="px-2 mb-2 text-xs font-semibold text-gray-400 uppercase">
            Main
          </p>
          <div className="space-y-1">
            <SidebarLink
              to="/app/dashboard"
              label="Dashboard"
              icon={<Home size={18} />}
            />
            <SidebarLink
              to="/app/courses"
              label="Courses library"
              icon={<BookOpen size={18} />}
            />
            <SidebarLink
              to="/app/exams"
              label="Exams"
              icon={<FileText size={18} />}
            />
            <SidebarLink
              to="/app/registration"
              label="Registrations"
              icon={<FileText size={18} />}
            />
          </div>
        </div>

        {/* COMMUNICATION */}
        <div>
          <p className="px-2 mb-2 text-xs font-semibold text-gray-400 uppercase">
            Communication
          </p>
          <div className="space-y-1">
            <SidebarLink
              to="/app/messages"
              label="Messages"
              icon={<MessageCircle size={18} />}
              badge={3}
            />
            <SidebarLink
              to="/app/Groups"
              label="Groups & Communitys"
              icon={<GroupIcon size={22} />}
              badge={13}
            />
            <SidebarLink
              to="/app/video-sessions"
              label="Video Sessions"
              icon={<Video size={18} />}
            />
            <p className="px-2 mb-2 text-xs font-semibold text-gray-400 uppercase">
            NEWS
          </p>
            <SidebarLink
              to="/app/daliy-news"
              label="Daliy News"
              icon={<LucideNewspaper size={18} />}
            />
          </div>
        </div>

        {/* SETTINGS */}
        <div>
          <p className="px-2 mb-2 text-xs font-semibold text-gray-400 uppercase">
            Account
          </p>
          <div className="space-y-1">
            <SidebarLink
              to="/app/settings"
              label="Settings"
              icon={<Settings size={18} />}
            />
          </div>
        </div>
      </nav>

      {/* Profile */}
      <div className="px-3 py-4">
        <Link
          to="/app/profile"
          className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-100 transition"
        >
          {/* Avatar */}
          <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-semibold">
            DF
          </div>

          {/* User Info */}
          <div className="flex-1 leading-tight">
            <p className="text-sm font-medium text-gray-800">David Francis</p>
            <p className="text-xs text-gray-500">View profile</p>
          </div>

          {/* Icon */}
          <UserSquare2 size={18} className="text-gray-400" />
        </Link>
      </div>

      {/* Logout */}
      <div className="px-3 py-4">
        <SidebarLink
          to="/auth"
          label="Logout"
          icon={<LogOut size={18} />}
        />
      </div>
    </aside>
  );
}
