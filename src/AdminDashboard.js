import React, { useState } from "react";
import { FaBars, FaBell, FaUserCircle } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"; // Add your custom styles

const AdminDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div
        className={`sidebar bg-primary text-white p-3 ${isSidebarOpen ? "" : "collapsed"}`}
      >
        <div className="sidebar-header mb-4">
          <h4>MIOT ADMIN</h4>
        </div>
        <ul className="list-unstyled">
          <li className="mb-3">
            <a href="#" className="text-white text-decoration-none">Dashboard</a>
          </li>
          <li className="mb-3">
            <a href="#" className="text-white text-decoration-none">Appointments</a>
          </li>
          <li className="mb-3">
            <a href="#" className="text-white text-decoration-none">Doctors</a>
          </li>
          <li className="mb-3">
            <a href="#" className="text-white text-decoration-none">Clients</a>
          </li>
          <li className="mb-3">
            <a href="#" className="text-white text-decoration-none">Reports</a>
          </li>
          <li>
            <a href="#" className="text-white text-decoration-none">Settings</a>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-grow-1">
        {/* Header */}
        <header className="bg-light d-flex justify-content-between align-items-center p-3 shadow-sm">
          <button className="btn btn-primary" onClick={toggleSidebar}>
            <FaBars />
          </button>
          <div className="d-flex align-items-center">
            <FaBell className="text-secondary mx-3" size={24} />
            <div className="dropdown">
              <FaUserCircle
                size={24}
                className="dropdown-toggle text-secondary"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              />
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                <li>
                  <a className="dropdown-item" href="#">View Profile</a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">Change Password</a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </header>

        {/* Dashboard Widgets */}
        <main className="p-4">
          <h1>Welcome, Admin</h1>
          <p>Use the navigation to manage the hospital system.</p>
          
          {/* Dashboard Widgets */}
          <div className="row">
            <div className="col-md-3 mb-4">
              <div className="widget p-4 bg-light rounded shadow-sm">
                <h4>Total Appointments</h4>
                <p className="h2">150</p>
              </div>
            </div>

            <div className="col-md-3 mb-4">
              <div className="widget p-4 bg-light rounded shadow-sm">
                <h4>Active Doctors</h4>
                <p className="h2">10</p>
              </div>
            </div>

            <div className="col-md-3 mb-4">
              <div className="widget p-4 bg-light rounded shadow-sm">
                <h4>Pending Appointments</h4>
                <p className="h2">5</p>
              </div>
            </div>

            <div className="col-md-3 mb-4">
              <div className="widget p-4 bg-light rounded shadow-sm">
                <h4>Canceled Appointments</h4>
                <p className="h2">3</p>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="widget p-4 bg-primary text-white rounded shadow-sm">
                <button className="btn btn-light w-100">Add New Appointment</button>
              </div>
            </div>

            <div className="col-md-6 mb-4">
              <div className="widget p-4 bg-success text-white rounded shadow-sm">
                <button className="btn btn-light w-100">Update Doctors' Availability</button>
              </div>
            </div>
          </div>

          {/* Contact Support Section */}
          <div className="contact-support mt-5">
            <h4>Contact Support</h4>
            <p>If you need assistance, feel free to reach out to our support team.</p>
            <button className="btn btn-danger w-100">Contact Support</button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
