const express = require("express");
const router = express.Router();
const {
    createUser,
    getDepartments,
    getPocsByDepartment,
    getAppointmentDetailsForPoc,
    getAvailableDates,
    getAvailableTimes,
    createAppointment,
} = require("../controllers/pocController");

// Route to create a user
router.post("/users", createUser);

// Route to fetch departments
router.get("/departments", getDepartments);

// Route to fetch doctors (POCs) based on department selection
router.get("/pocs/:departmentId", getPocsByDepartment); // Handles getting doctors by department

// Route to fetch appointment details for a specific doctor (POC)
router.get("/appointments/:pocId", getAppointmentDetailsForPoc); // Fetch appointment details for the selected doctor

// Route to fetch available dates for appointments (based on doctor)
router.post("/pocs/available-dates", getAvailableDates); // Allows fetching available dates for doctor

// Route to fetch available times for a specific date and doctor
router.post("/pocs/available-times", getAvailableTimes); // Fetch available times for the selected date and doctor

// Route to create a new appointment
router.post("/create-appointments", createAppointment); // Endpoint to create an appointment

module.exports = router;
