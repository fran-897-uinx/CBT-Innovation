import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  BookOpen,
  FileText,
  MessageCircle,
  Video,
  Settings,
  GroupIcon,
  ChevronRight,
  Newspaper,
  X,
} from "lucide-react";

/* ----------------------------------
   Sidebar Link Component
----------------------------------- */
const SidebarLink = ({ to, label, icon, badge = 0, collapsed, onClick }) => {
  const { pathname } = useLocation();
  const isActive = pathname.startsWith(to);

  return (
    <Link
      to={to}
      onClick={onClick}
      aria-current={isActive ? "page" : undefined}
      title={collapsed ? label : undefined}
      className={`group flex items-center rounded-md px-3 py-2.5 transition
        ${collapsed ? "justify-center" : "justify-between"}
        ${
          isActive
            ? "bg-blue-50 text-blue-700 border-l-4 border-blue-600"
            : "text-gray-700 hover:bg-gray-100"
        }
      `}
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
        {!collapsed && <span className="text-sm font-medium">{label}</span>}
      </div>

      {!collapsed && badge > 0 && (
        <span className="bg-red-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
          {badge}
        </span>
      )}
    </Link>
  );
};

/* ----------------------------------
   Sidebar
----------------------------------- */
export default function AppSidebar({ collapsed, onToggle, handleNavClick }) {
  return (
    <aside
      className={`fixed inset-y-0 left-0 z-50 bg-white shadow-lg transition-all duration-300
        ${collapsed ? "w-20" : "w-64"}
      `}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4 border-b">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-gray-900 rounded-xl flex items-center justify-center text-white font-bold">
            TP
          </div>
          {!collapsed && (
            <h1 className="text-lg font-bold text-gray-900">TestPrep</h1>
          )}
        </div>

        {/* Desktop Collapse */}
        <button
          onClick={onToggle}
          className="hidden md:flex p-1 rounded-md hover:bg-gray-100"
          aria-label="Toggle sidebar"
        >
          <ChevronRight
            className={`transition-transform ${collapsed ? "rotate-180" : ""}`}
          />
        </button>

        {/* Mobile Close */}
        <button
          onClick={handleNavClick}
          className="md:hidden p-1 rounded-md hover:bg-gray-100"
        >
          <X size={20} />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-2 py-4 space-y-6 overflow-y-auto">
        {/* MAIN */}
        <div>
          {!collapsed && (
            <p className="px-2 mb-2 text-xs font-semibold text-gray-400 uppercase">
              Main
            </p>
          )}
          <SidebarLink
            to="/app/dashboard"
            label="Dashboard"
            icon={<Home size={18} />}
            collapsed={collapsed}
            onClick={handleNavClick}
          />
          <SidebarLink
            to="/app/courses"
            label="Courses Library"
            icon={<BookOpen size={18} />}
            collapsed={collapsed}
            onClick={handleNavClick}
          />
          <SidebarLink
            to="/app/exams"
            label="Exams"
            icon={<FileText size={18} />}
            collapsed={collapsed}
            onClick={handleNavClick}
          />
          <SidebarLink
            to="/app/registration"
            label="Registration"
            icon={<FileText size={18} />}
            collapsed={collapsed}
            onClick={handleNavClick}
          />
        </div>

        {/* COMMUNICATION */}
        <div>
          {!collapsed && (
            <p className="px-2 mb-2 text-xs font-semibold text-gray-400 uppercase">
              Communication
            </p>
          )}
          <SidebarLink
            to="/app/messages"
            label="Messages"
            icon={<MessageCircle size={18} />}
            badge={3}
            collapsed={collapsed}
            onClick={handleNavClick}
          />
          <SidebarLink
            to="/app/groups"
            label="Groups"
            icon={<GroupIcon size={18} />}
            badge={13}
            collapsed={collapsed}
            onClick={handleNavClick}
          />
          <SidebarLink
            to="/app/video-sessions"
            label="Video Sessions"
            icon={<Video size={18} />}
            collapsed={collapsed}
            onClick={handleNavClick}
          />
          <SidebarLink
            to="/app/daily-news"
            label="Daily News"
            icon={<Newspaper size={18} />}
            collapsed={collapsed}
            onClick={handleNavClick}
          />
        </div>

        {/* SETTINGS */}
        <SidebarLink
          to="/app/settings"
          label="Settings"
          icon={<Settings size={18} />}
          collapsed={collapsed}
          onClick={handleNavClick}
        />
      </nav>

      {/* Profile */}
      <div className="px-3 py-4 border-t">
        <Link
          to="/app/profile"
          onClick={handleNavClick}
          className="flex items-center gap-3"
        >
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
