const pool = require("../../db/dbConnection");

export abstract class EventDef {
  protected eventId: string = "";
  protected eventName: string = "";
  protected eventDate: string = "";
  protected maxParticipants: number = 0;
  protected participantsRegistered: number = 0;

  abstract getEventId(): string;
  abstract getEventName(): string;
  abstract getEventDate(): string;
  abstract getMaxParticipants(): number;
  abstract getParticipantsRegistered(): number;

  abstract setEventId(eventId: string): void;
  abstract setEventName(eventName: string): void;
  abstract setEventDate(eventDate: string): void;
  abstract setMaxParticipants(max: number): void;

  async addEvent() {
    await pool.query(
      "INSERT INTO events (event_id, event_name, event_date, max_participants) VALUES ($1, $2, $3, $4)",
      [this.eventId, this.eventName, this.eventDate, this.maxParticipants]
    );
  }

  async getEvents() {
    const result = await pool.query("SELECT * FROM events ORDER BY event_id");
    return result.rows;
  }

  async getEventById(id: string) {
    const result = await pool.query("SELECT * FROM events WHERE event_id = $1", [id]);
    return result.rows[0];
  }

  static async registerStudent(studentId: string, eventId: string) {
    // Check student exists
    const studentResult = await pool.query("SELECT * FROM students WHERE student_id = $1", [studentId]);
    if (studentResult.rows.length === 0) throw new Error("Student not found.");

    // Check event exists and has space
    const eventResult = await pool.query("SELECT * FROM events WHERE event_id = $1", [eventId]);
    if (eventResult.rows.length === 0) throw new Error("Event not found.");
    const event = eventResult.rows[0];
    if (event.participants_registered >= event.max_participants) {
      throw new Error(`"${event.event_name}" is full.`);
    }

    // Check student not already registered for this event
    const regResult = await pool.query(
      "SELECT * FROM registrations WHERE student_id = $1 AND event_id = $2",
      [studentId, eventId]
    );
    if (regResult.rows.length > 0) throw new Error("Student is already registered for this event.");

    // Insert into registrations table
    await pool.query(
      "INSERT INTO registrations (student_id, event_id) VALUES ($1, $2)",
      [studentId, eventId]
    );

    // Update participants count on event
    await pool.query(
      "UPDATE events SET participants_registered = participants_registered + 1 WHERE event_id = $1",
      [eventId]
    );
  }
}