import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../Pages/Home";
import { FolderDirectory } from "../Pages/FolderDirectory";

export const MainPages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/floder" element={<FolderDirectory />} />
    </Routes>
  );
};
