const { Student } = require("../dist/classes/Student");

const addStudent = async (req, res) => {
  try {
    const { student_id, first_name, last_name, department } = req.body;
    const student = new Student(student_id, first_name, last_name, department);
    await student.addStudent();
    res.json({ message: "Student added" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getStudents = async (req, res) => {
  try {
    const student = new Student();
    const students = await student.getStudents();
    res.json(students);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getStudentById = async (req, res) => {
  try {
    const { id } = req.params;
    const student = new Student();
    const result = await student.getStudentById(id);
    if (!result) return res.status(404).json({ message: "Student not found." });
    res.json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { addStudent, getStudents, getStudentById };