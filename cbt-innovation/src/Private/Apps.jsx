import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import PrivateLayout from "./components/Inner";

import DashboardPage from "./pages/Dashboard";
import CoursesPage from "./pages/CoursesPage";
import ExamsPage from "./pages/Practice/ExamsPage";
import RegistrationPage from "./pages/RegistrationPage";
import MessagesPage from "./pages/Chatting/MessagesPage";
import VideoSessionsPage from "./pages/videosession/VideoSessionsPage";
import SettingsPage from "./pages/SettingsPage";
import ProfilePage from "./pages/ProfilePage";
import BlogPage from "./pages/BlogPage";
import Pricing from "../LandPage/Pricing/Pricing";
import SearchPage from "./pages/Searchpage";
import Grouppage from "./pages/group/Grouppage";
import VideoListPage from "./pages/videosession/Videolist";
import AccountPage from "./Settings/account";
import PrivacyPage from "./Settings/privacy";
import AvatarPage from "./Settings/avatar";
import ListsPage from "./Settings/list";
import ChatSystemPage from "./Settings/chatsystem";
import NotificationPage from "./Settings/notification";
import StoragePage from "./Settings/storage";
import AccessibilityPage from "./Settings/assecibility";
import LanguagePage from "./Settings/language";
import HelpPage from "./Settings/help";
import InvitePage from "./Settings/invite";
import UpdatePage from "./Settings/update";
import PersonalChatRoom from "./pages/Chatting/chatroom";
import GroupChatRoom from "./pages/group/GroupChat";
import ExamListPage from "./pages/Practice/Examlist";
import ExamPage from "./pages/Practice/ExamsPage";

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
        <Route path="settings" element={<SettingsPage />} />
        <Route path="settings/account" element={<AccountPage />} />
        <Route path="settings/privacy" element={<PrivacyPage />} />
        <Route path="settings/avatar" element={<AvatarPage />} />
        <Route path="settings/lists" element={<ListsPage />} />
        <Route path="settings/chat-system" element={<ChatSystemPage />} />
        <Route path="settings/notification" element={<NotificationPage />} />
        <Route path="settings/storage" element={<StoragePage />} />
        <Route path="settings/accessibility" element={<AccessibilityPage />} />
        <Route path="settings/language" element={<LanguagePage />} />
        <Route path="settings/help" element={<HelpPage />} />
        <Route path="settings/invite" element={<InvitePage />} />
        <Route path="settings/update" element={<UpdatePage />} />
      </Route>
    </Routes>
  );
}
