#include "Event.h"
#include "Student.h"
#include <iostream>
using namespace std;

// Constructor
Event::Event(string id, string name, string date, int maxP) {
    eventID                = id;
    eventName              = name;
    eventDate              = date;
    maxParticipants        = maxP;
    participantsRegistered = 0;
    cout << "[Event Created]: " << eventName << "\n";
}

// Destructor
Event::~Event() {
    cout << "[Event Removed]: " << eventName << "\n";
}

// Getters
string Event::getEventID()                { return eventID; }
string Event::getEventName()              { return eventName; }
string Event::getEventDate()              { return eventDate; }
int    Event::getMaxParticipants()        { return maxParticipants; }
int    Event::getParticipantsRegistered() { return participantsRegistered; }

// Setters
void Event::setEventID(string id)       { eventID         = id; }
void Event::setEventName(string name)   { eventName       = name; }
void Event::setEventDate(string date)   { eventDate       = date; }
void Event::setMaxParticipants(int max) { maxParticipants = max; }

// Methods
bool Event::isAvailable() {
    return participantsRegistered < maxParticipants;
}

void Event::registerStudent(Student &student) {
    if (isAvailable()) {
        participantsRegistered++;
        cout << "  Success! " << student.getFirstName() << " "
             << student.getLastName() << " registered for '" << eventName << "'.\n";
    } else {
        cout << "  Sorry, '" << eventName << "' is full.\n";
    }
}

void Event::displayInfo() {
    string status = isAvailable() ? "Available" : "Full";
    cout << "  Event ID : " << eventID << "\n";
    cout << "  Name     : " << eventName << "\n";
    cout << "  Date     : " << eventDate << "\n";
    cout << "  Slots    : " << participantsRegistered << " / " << maxParticipants << "\n";
    cout << "  Status   : " << status << "\n";
}