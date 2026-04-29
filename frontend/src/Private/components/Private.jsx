import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import PrivateLayout from "./Inner";

import DashboardPage from "../pages/Dashboard";
import CoursesPage from "../pages/CoursesPage";
import ExamsPage from "../pages/Practice/ExamsPage";
import RegistrationPage from "../pages/RegistrationPage";
import MessagesPage from "../pages/Chatting/MessagesPage";
import VideoSessionsPage from "../pages/videosession/VideoSessionsPage";
// import SettingsPage from "../pages/SettingsPage";
import ProfilePage from "../pages/ProfilePage";
import BlogPage from "../pages/BlogPage";
import Pricing from "../../LandPage/Pricing/Pricing";
import SearchPage from "../pages/Searchpage";
import Grouppage from "../pages/group/Grouppage";
import VideoListPage from "../pages/videosession/Videolist";
import PersonalChatRoom from "../pages/Chatting/chatroom";
import GroupChatRoom from "../pages/group/GroupChat";
import ExamListPage from "../pages/Practice/Examlist";
import ExamPage from "../pages/Practice/ExamsPage";
import SettingsLayout from "../pages/SettingsLayout";
import ProfileSettings from "../Settings/ProfileSettings";

export default function PrivateApp() {
  return (
    <Routes>
      <Route path="/" element={<PrivateLayout />}>
        <Route index element={<Navigate to="dashboard" />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="courses" element={<CoursesPage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="groups" element={<Grouppage />} />
        <Route path="registration" element={<RegistrationPage />} />
        <Route path="video-sessions" element={<VideoListPage />} />
        <Route path="video-sessions/:id" element={<VideoSessionsPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="daily-news" element={<BlogPage />} />
        <Route path="pricing" element={<Pricing />} />
        {/* Exam Routing */}
        <Route path="exams" element={<ExamListPage />} />
        <Route path="exams/:id" element={<ExamPage />} />
        {/* Messages Routing  */}
        <Route path="messages" element={<MessagesPage />} />
        <Route path="messages/:id" element={<PersonalChatRoom />} />
        {/* Group Routing */}
        <Route path="groups" element={<Grouppage />} />
        <Route path="groups/:id" element={<GroupChatRoom />} />
        {/* Settings Routing */}
        <Route path="settings" element={<SettingsLayout />} />        
      </Route>
    </Routes>
  );
}
