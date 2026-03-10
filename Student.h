#ifndef STUDENT_H
#define STUDENT_H

#include <string>
using namespace std;

class Student {
private:
    string studentID;
    string firstName;
    string lastName;
    string department;

public:
    Student(string id, string fName, string lName, string dept);
    ~Student();

    string getStudentID();
    string getFirstName();
    string getLastName();
    string getDepartment();

    void setStudentID(string id);
    void setFirstName(string name);
    void setLastName(string name);
    void setDepartment(string dept);

    void displayInfo();
};

#endif