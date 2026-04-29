import React from "react";
import Land from "./LandPage/Land/Land";
import AuthPage from "./App/pages/AuthPage";
import { Route, Routes } from "react-router-dom";
import PrivateApp from "./Private/components/Private";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Land />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/app/*" element={<PrivateApp />} />
      </Routes>
    </>
  );
};

export default App;
