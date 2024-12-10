import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminDashboard from "./AdminDashboard"; // Import your Admin Dashboard component
import LoginPage from "./LoginPage"; // Import the LoginPage



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/admin" element={<AdminDashboard />} /> {/* Admin Dashboard route */}
      </Routes>
    </Router>
  );
};

export default App;
