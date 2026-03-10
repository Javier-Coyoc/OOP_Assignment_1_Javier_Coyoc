const pool = require("../../db/dbConnection");

export abstract class StudentDef {
  protected studentId: string = "";
  protected firstName: string = "";
  protected lastName: string = "";
  protected department: string = "";

  abstract getStudentId(): string;
  abstract getFirstName(): string;
  abstract getLastName(): string;
  abstract getDepartment(): string;

  abstract setStudentId(studentId: string): void;
  abstract setFirstName(firstName: string): void;
  abstract setLastName(lastName: string): void;
  abstract setDepartment(department: string): void;

  async addStudent() {
    await pool.query(
      "INSERT INTO students (student_id, first_name, last_name, department) VALUES ($1, $2, $3, $4)",
      [this.studentId, this.firstName, this.lastName, this.department]
    );
  }

  async getStudents() {
    const result = await pool.query(`
      SELECT s.*, r.event_id
      FROM students s
      LEFT JOIN registrations r ON s.student_id = r.student_id
      ORDER BY s.student_id
    `);
    return result.rows;
  }

  async getStudentById(id: string) {
    const result = await pool.query(`
      SELECT s.*, r.event_id
      FROM students s
      LEFT JOIN registrations r ON s.student_id = r.student_id
      WHERE s.student_id = $1
    `, [id]);
    return result.rows[0];
  }
}