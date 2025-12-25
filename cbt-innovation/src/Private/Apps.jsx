import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import PrivateLayout from "./Inner";

import DashboardPage from "./pages/Dashboard";
import CoursesPage from "./pages/CoursesPage";
import ExamsPage from "./pages/ExamsPage";
import RegistrationPage from "./pages/RegistrationPage";
import MessagesPage from "./pages/MessagesPage";
import VideoSessionsPage from "./pages/videosession/VideoSessionsPage";
import SettingsPage from "./pages/SettingsPage";
import ProfilePage from "./pages/ProfilePage";
import BlogPage from "./pages/BlogPage";
import Pricing from "../LandPage/Pricing/Pricing";
import { Searchpage } from "./pages/Searchpage";
import Grouppage from "./pages/Grouppage";
import ChatRoom from "./pages/chatroom";
import VideoListPage from "./pages/videosession/Videolist";

export default function PrivateApp() {
  return (
    <Routes>
      <Route path="/" element={<PrivateLayout />}>
        <Route index element={<Navigate to="dashboard" />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="courses" element={<CoursesPage />} />
        <Route path="search" element={<Searchpage />} />
        <Route path="groups" element={<Grouppage />} />
        <Route path="exams" element={<ExamsPage />} />
        <Route path="registration" element={<RegistrationPage />} />
        <Route path="messages" element={<MessagesPage />} />
        <Route path="video-sessions" element={<VideoListPage />} />
        <Route path="video-sessions/:id" element={<VideoSessionsPage />} />
        <Route path="settings" element={<SettingsPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="daliy-news" element={<BlogPage />} />
        <Route path="pricing" element={<Pricing />} />
        {/* Messages Routing  */}
        <Route path="messages/:id" element={<ChatRoom />} />
      </Route>
    </Routes>
  );
}
