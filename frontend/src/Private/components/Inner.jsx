import React, { useState, useEffect } from "react";
import { Outlet, Navigate, Link, useLocation } from "react-router-dom";
import {
  Menu,
  SearchIcon,
  X,
  MessageSquareTextIcon,
  Home,
  Newspaper,
  FileText,
  BellRingIcon,
} from "lucide-react";
import AppSidebar from "./Navigation";
import BottomNav from "./Bottomnav";

const titles = {
  "/app/dashboard": "Home",
  "/app/search": "Search",
  "/app/messages": "Chat",
  "/app/daliy-news": "Daliy News",
  "/app/registration": "Registration",
  "/app/courses": "Course Library",
  "/app/exams": "examination Board",
  "/app/Groups": "Groups & Communitys",
  "/app/video-sessions": "video Sessions",
  "/app/profile": "My Profile",
  "/app/settings": "Settings",
  "/app/groups/:id": "Groupchat",
};

const Navbelow = () => (
  <nav className="grid grid-cols-5 gap-3 border-t border-t-gray-600 bg-card h-14 items-center test-foreground">
    <Link to="/app/dashboard" className="flex justify-center">
      <Home size={25} className="z-10 transition-all duration-300" />
    </Link>
    <Link to="/app/search" className="flex justify-center">
      <SearchIcon size={25} className="z-10 transition-all duration-300" />
    </Link>
    <Link to="/app/messages" className="flex justify-center">
      <MessageSquareTextIcon
        size={25}
        className="z-10 transition-all duration-300"
      />
    </Link>
    <Link to="/app/daliy-news" className="flex justify-center">
      <Newspaper size={25} className="z-10 transition-all duration-300" />
    </Link>
    <Link to="/app/registration" className="flex justify-center">
      <FileText size={25} className="z-10 transition-all duration-300" />
    </Link>
  </nav>
);

function TopNav({ onMenu }) {
  const { pathname } = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const heads = titles[pathname] || "";
  return (
    <header className="fixed top-0 left-0 right-0 z-40 md:ml-64">
      <div
        className={`h-14 px-4 bg-background backdrop-blur-md border-b border-gray-200 flex items-center justify-between ${
          isScrolled
            ? "bg-background shadow-md py-2"
            : "bg-background/90 backdrop-blur-sm py-4"
        }`}
      >
        {/* {Left} */}
        <div className="flex items-center gap-3">
          <button className="md:hidden" onClick={onMenu}>
            <Menu size={25} />
          </button>
          <h1 className="font-semibold text-foreground text-base capitalize text-balance">
            {heads}
          </h1>
          {/* {Right Actions} */}
          <div className="flex items-center gap-3">
            <button className="relative ">
              <BellRingIcon size={20} />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" />
            </button>
            <div className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center text-sm font-semibold">
              TP
            </div>
            <Link to="/app/search" className="hidden md:inline-block">
              <SearchIcon size={20} />
            </Link>
          </div>
        </div>
        <Link
          to="/app/pricing/"
          className=" bg-gradient-to-tr from-10% from-blue-700 to-blue-950 rounded-2xl px-4 py-1 mr-2 font-bold italic capitalize text-white cursor-pointer"
        >
          Upgrade
        </Link>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-[4px] bg-gradient-to-r from-transparent via-gray-900 to-transparent" />
    </header>
  );
}
export default function PrivateLayout() {
  const isAuthenticated = true;
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const handleNavClick = () => setSidebarOpen(false);

  if (!isAuthenticated) return <Navigate to="/" />;

  return (
    <div className="min-h-screen bg-background">
      <TopNav onMenu={() => setSidebarOpen(true)} />

      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        <AppSidebar
          collapsed={collapsed}
          onToggle={() => setCollapsed(!collapsed)}
        />
      </div>

      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <>
          <div
            className="fixed inset-0 bg-background/40 z-40"
            onClick={() => setSidebarOpen(false)}
          />
          <div
            className={`fixed inset-y-0 left-0 w-64 bg-background shadow-lg z-50 transform transition-transform duration-300 ${
              sidebarOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <AppSidebar collapsed={false} handleNavClick={handleNavClick} />
          </div>
        </>
      )}

      {/* Main */}
      <main
        className={`pt-16 p-4 transition-all duration-300 ${
          collapsed ? "md:ml-20" : "md:ml-64"
        }`}
      >
        <Outlet />
      </main>

      <footer className="fixed bottom-0 left-0 right-0 md:hidden">
        <BottomNav />
      </footer>
    </div>
  );
}
