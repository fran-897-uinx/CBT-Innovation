import {Routes, Route } from "react-router-dom";
import SettingsPage from "../pages/SettingsPage";
import AccountPage from "./account";

<Route path="settings" element={<SettingsPage />}>
<Route path="account" element={<AccountPage/>}/>
</Route>