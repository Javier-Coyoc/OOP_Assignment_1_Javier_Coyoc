const express = require("express");
const router = express.Router();
const { addStudent, getStudents, getStudentById } = require("../controllers/studentController");
const { addEvent, getEvents, getEventById, registerStudent } = require("../controllers/eventController");

// Student routes
router.post("/students", addStudent);
router.get("/students", getStudents);
router.get("/students/:id", getStudentById);

// Event routes
router.post("/events", addEvent);
router.get("/events", getEvents);
router.get("/events/:id", getEventById);
router.post("/events/register", registerStudent);

module.exports = router;
