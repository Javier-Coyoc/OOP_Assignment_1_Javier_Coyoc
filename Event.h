#ifndef EVENT_H
#define EVENT_H

#include <string>
using namespace std;

// Forward declaration
class Student;

class Event {
private:
    string eventID;
    string eventName;
    string eventDate;
    int    maxParticipants;
    int    participantsRegistered;

public:
    Event(string id, string name, string date, int maxP);
    ~Event();

    string getEventID();
    string getEventName();
    string getEventDate();
    int    getMaxParticipants();
    int    getParticipantsRegistered();

    void setEventID(string id);
    void setEventName(string name);
    void setEventDate(string date);
    void setMaxParticipants(int max);

    bool isAvailable();
    void registerStudent(Student &student);
    void displayInfo();
};

#endif