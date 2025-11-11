import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CompaniesPage from "./pages/CompaniesPage";
import CompanyDetails from "./pages/CompanyDetails"; // ✅ Added details page route

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/companies" element={<CompaniesPage />} />
        <Route path="/companies/:id" element={<CompanyDetails />} /> {/* ✅ New details page */}
      </Routes>
    </div>
  );
}

export default App;
