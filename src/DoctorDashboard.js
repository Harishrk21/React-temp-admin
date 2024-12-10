// src/DoctorDashboard.js
import React from 'react';

const DoctorDashboard = () => {
  return (
    <div className="h-screen bg-green-100 flex justify-center items-center">
      <div className="max-w-lg mx-auto p-4 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4 text-blue-500">Doctor Dashboard</h1>
        <p>Welcome to the Doctor Dashboard!</p>
        <p>Here you can manage patient appointments and more.</p>
      </div>
    </div>
  );
};

export default DoctorDashboard;
