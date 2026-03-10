import { StudentDef } from "./StudentDef";

export class Student extends StudentDef {
  constructor(studentId?: string, firstName?: string, lastName?: string, department?: string) {
    super();
    this.setStudentId(studentId   || "");
    this.setFirstName(firstName   || "");
    this.setLastName(lastName     || "");
    this.setDepartment(department || "");
  }

  getStudentId(): string  { return this.studentId; }
  getFirstName(): string  { return this.firstName; }
  getLastName(): string   { return this.lastName; }
  getDepartment(): string { return this.department; }

  setStudentId(studentId: string): void   { this.studentId  = studentId; }
  setFirstName(firstName: string): void   { this.firstName  = firstName; }
  setLastName(lastName: string): void     { this.lastName   = lastName; }
  setDepartment(department: string): void { this.department = department; }
}