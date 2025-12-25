import React from "react";
import Land from "./LandPage/Land/Land";
import AuthPage from "./App/pages/AuthPage";
import { Route, Routes } from "react-router-dom";
import PrivateApp from "./Private/Apps";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-200 p-2">
      <Routes>
        <Route path="/" element={<Land />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/app/*" element={<PrivateApp />} />
      </Routes>
    </div>
  );
};

export default App;
