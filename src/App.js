import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminDashboard from "./AdminDashboard"; // Import your Admin Dashboard component
import LoginPage from "./LoginPage"; // Import the LoginPage
import AddNewAppointment from "./AddNewAppointment";
import Departments from "./Departments";
import ViewAppointments from "./ViewAppointments";
import ViewPOC from "./ViewPOC";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/admin" element={<AdminDashboard />} /> {/* Admin Dashboard route */}
        <Route path="/add-new-appointment" element={<AddNewAppointment />} />

         {/* Departments Page */}
         <Route path="/departments" element={<Departments />} />
          
          {/* POCs for a Department */}
          <Route path="/view-poc/:departmentId" element={<ViewPOC />} />
          
          {/* Appointments for a POC */}
          <Route path="/view-appointments/:pocId" element={<ViewAppointments />} />
      </Routes>
    </Router>
  );
};

export default App;
