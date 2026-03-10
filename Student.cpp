#include "Student.h"
#include <iostream>
using namespace std;

// Constructor
Student::Student(string id, string fName, string lName, string dept) {
    studentID  = id;
    firstName  = fName;
    lastName   = lName;
    department = dept;
    cout << "[Student Created]: " << firstName << " " << lastName << "\n";
}

// Destructor
Student::~Student() {
    cout << "[Student Removed]: " << firstName << " " << lastName << "\n";
}

// Getters
string Student::getStudentID()  { return studentID; }
string Student::getFirstName()  { return firstName; }
string Student::getLastName()   { return lastName; }
string Student::getDepartment() { return department; }

// Setters
void Student::setStudentID(string id)    { studentID  = id; }
void Student::setFirstName(string name)  { firstName  = name; }
void Student::setLastName(string name)   { lastName   = name; }
void Student::setDepartment(string dept) { department = dept; }

// Methods
void Student::displayInfo() {
    cout << "  Student ID : " << studentID << "\n";
    cout << "  Name       : " << firstName << " " << lastName << "\n";
    cout << "  Department : " << department << "\n";
}