import React, { useState } from 'react';

interface Appointment {
  id: number;
  doctorName: string;
  patientName: string;
  department: string;
  date: string;
  time: string;
  phoneNumber: string;
  age: number;
}

interface Doctor {
  name: string;
  department: string;
  typeOfMedicine: string;
  appointments: Appointment[];
}

interface Department {
  name: string;
  doctors: Doctor[];
}

const CardiologyAppointments = () => {
  const departments: Department[] = [
    {
      name: 'Cardiology',
      doctors: [
        {
          name: 'Dr. John Doe',
          department: 'Cardiology',
          typeOfMedicine: 'MBBS, MD',
          appointments: [
            { id: 1, doctorName: 'Dr. John Doe', patientName: 'Jane Doe', department: 'Cardiology', date: '2024-12-10', time: '10:00 AM', phoneNumber: '1234567890', age: 30 },
            { id: 2, doctorName: 'Dr. John Doe', patientName: 'John Smith', department: 'Cardiology', date: '2024-12-11', time: '11:00 AM', phoneNumber: '9876543210', age: 40 },
          ],
        },
        {
          name: 'Dr. Jane Smith',
          department: 'Cardiology',
          typeOfMedicine: 'MBBS, MS',
          appointments: [
            { id: 3, doctorName: 'Dr. Jane Smith', patientName: 'Alice Johnson', department: 'Cardiology', date: '2022-01-03', time: '12:00 PM', phoneNumber: '1111111111', age: 25 },
            { id: 4, doctorName: 'Dr. Jane Smith', patientName: 'Bob Johnson', department: 'Cardiology', date: '2022-01-04', time: '1:00 PM', phoneNumber: '2222222222', age: 35 },
          ],
        },
      ],
    },
    {
      name: 'Neurology',
      doctors: [
        {
          name: 'Dr. Bob Johnson',
          department: 'Neurology',
          typeOfMedicine: 'MBBS, MD',
          appointments: [
            { id: 5, doctorName: 'Dr. Bob Johnson', patientName: 'Jane Doe', department: 'Neurology', date: '2022-01-05', time: '10:00 AM', phoneNumber: '1234567890', age: 30 },
            { id: 6, doctorName: 'Dr. Bob Johnson', patientName: 'John Smith', department: 'Neurology', date: '2022-01-06', time: '11:00 AM', phoneNumber: '9876543210', age: 40 },
          ],
        },
        {
          name: 'Dr. Alice Johnson',
          department: 'Neurology',
          typeOfMedicine: 'MBBS, MS',
          appointments: [
            { id: 7, doctorName: 'Dr. Alice Johnson', patientName: 'Alice Johnson', department: 'Neurology', date: '2022-01-07', time: '12:00 PM', phoneNumber: '1111111111', age: 25 },
            { id: 8, doctorName: 'Dr. Alice Johnson', patientName: 'Bob Johnson', department: 'Neurology', date: '2022-01-08', time: '1:00 PM', phoneNumber: '2222222222', age: 35 },
          ],
        },
      ],
    },
    {
      name: 'Oncology',
      doctors: [
        {
          name: 'Dr. John Smith',
          department: 'Oncology',
          typeOfMedicine: 'MBBS, MD',
          appointments: [
            { id: 9, doctorName: 'Dr. John Smith', patientName: 'Jane Doe', department: 'Oncology', date: '2022-01-09', time: '10:00 AM', phoneNumber: '1234567890', age: 30 },
            { id: 10, doctorName: 'Dr. John Smith', patientName: 'John Smith', department: 'Oncology', date: '2022-01-10', time: '11:00 AM', phoneNumber: '9876543210', age: 40 },
          ],
        },
        {
          name: 'Dr. Jane Doe',
          department: 'Oncology',
          typeOfMedicine: 'MBBS, MS',
          appointments: [
            { id: 11, doctorName: 'Dr. Jane Doe', patientName: 'Alice Johnson', department: 'Oncology', date: '2022-01-11', time: '12:00 PM', phoneNumber: '1111111111', age: 25 },
            { id: 12, doctorName: 'Dr. Jane Doe', patientName: 'Bob Johnson', department: 'Oncology', date: '2022-01-12', time: '1:00 PM', phoneNumber: '2222222222', age: 35 },
          ],
        },
      ],
    },
  ];

  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [showAppointments, setShowAppointments] = useState(false);

  const handleDepartmentChange = (department: string) => {
    setSelectedDepartment(department);
    setSelectedDoctor('');
    setShowAppointments(false);
  };

  const handleDoctorChange = (doctor: string) => {
    setSelectedDoctor(doctor);
  };

  const handleViewAppointments = () => {
    setShowAppointments(true);
  };

  const handleCancelAppointment = (id: number) => {
    console.log(`Cancel appointment ${id}`);
  };

  return (
    <div className="h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-blue-500 text-center p-4">MIOT HOSPITALS</h1>
      <nav className="bg-blue-500 text-white p-4 flex justify-between">
        <ul className="flex justify-end">
          <li className="mr-4">
            <a href="#" className="text-white hover:text-gray-200">Home</a>
          </li>
          <li className="mr-4">
            <a href="#" className="text-white hover:text-gray-200">Contact</a>
          </li>
          <li className="mr-4">
            <a href="#" className="text-white hover:text-gray-200">About Us</a>
          </li>
          <li>
            <div className="relative inline-block text-left">
              <button
                className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                type="button"
                aria-haspopup="true"
                aria-expanded="true"
              >
                Department
                <svg
                  className="ml-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div
                className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
              >
                {departments.map((department, index) => (
                  <button
                    key={department.name}
                    className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                    onClick={() => handleDepartmentChange(department.name)}
                  >
                    {department.name}
                  </button>
                ))}
              </div>
            </div>
          </li>
        </ul>
      </nav>
      {selectedDepartment && (
        <div className="max-w-7xl mx-auto p-4 sm:p-6 md:p-8">
          <h2 className="text-lg font-bold mb-2 text-blue-500">{selectedDepartment} Department</h2>
          <table className="w-full table-auto">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left">S.No</th>
                <th className="px-4 py-2 text-left">Doctor Name</th>
                <th className="px-4 py-2 text-left">Department</th>
                <th className="px-4 py-2 text-left">Type of Medicine</th>
                <th className="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
                        <tbody>
              {departments
                .find((department) => department.name === selectedDepartment)
                ?.doctors.map((doctor, index) => (
                  <tr key={doctor.name} className="border-b">
                    <td className="px-4 py-2">{index + 1}</td>
                    <td className="px-4 py-2">{doctor.name}</td>
                    <td className="px-4 py-2">{doctor.department}</td>
                    <td className="px-4 py-2">{doctor.typeOfMedicine}</td>
                    <td className="px-4 py-2">
                      <button
                        onClick={() => handleDoctorChange(doctor.name)}
                        className="text-blue-500 hover:text-blue-700"
                      >
                        View Appointments
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          {selectedDoctor && (
            <div className="mt-4">
              <h3 className="text-lg font-bold mb-2 text-blue-500">
                Appointments for {selectedDoctor}
              </h3>
              <table className="w-full table-auto">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-2 text-left">ID</th>
                    <th className="px-4 py-2 text-left">Patient Name</th>
                    <th className="px-4 py-2 text-left">Date</th>
                    <th className="px-4 py-2 text-left">Time</th>
                    <th className="px-4 py-2 text-left">Phone</th>
                    <th className="px-4 py-2 text-left">Age</th>
                    <th className="px-4 py-2 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {departments
                    .find((department) => department.name === selectedDepartment)
                    ?.doctors.find((doctor) => doctor.name === selectedDoctor)
                    ?.appointments.map((appointment) => (
                      <tr key={appointment.id} className="border-b">
                        <td className="px-4 py-2">{appointment.id}</td>
                        <td className="px-4 py-2">{appointment.patientName}</td>
                        <td className="px-4 py-2">{appointment.date}</td>
                        <td className="px-4 py-2">{appointment.time}</td>
                        <td className="px-4 py-2">{appointment.phoneNumber}</td>
                        <td className="px-4 py-2">{appointment.age}</td>
                        <td className="px-4 py-2">
                          <button
                            onClick={() => handleCancelAppointment(appointment.id)}
                            className="text-red-500 hover:text-red-700"
                          >
                            Cancel
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CardiologyAppointments;
