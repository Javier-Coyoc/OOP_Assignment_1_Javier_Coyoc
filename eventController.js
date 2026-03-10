const { Event } = require("../dist/classes/Event");

const addEvent = async (req, res) => {
  try {
    const { event_id, event_name, event_date, max_participants } = req.body;
    const event = new Event(event_id, event_name, event_date, max_participants);
    await event.addEvent();
    res.json({ message: "Event added" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getEvents = async (req, res) => {
  try {
    const event = new Event();
    const events = await event.getEvents();
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getEventById = async (req, res) => {
  try {
    const { id } = req.params;
    const event = new Event();
    const result = await event.getEventById(id);
    if (!result) return res.status(404).json({ message: "Event not found." });
    res.json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const registerStudent = async (req, res) => {
  try {
    const { student_id, event_id } = req.body;
    await Event.registerStudent(student_id, event_id);
    res.json({ message: "Student registered successfully." });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = { addEvent, getEvents, getEventById, registerStudent };