import { EventDef } from "./EventDef";

export class Event extends EventDef {
  constructor(eventId?: string, eventName?: string, eventDate?: string, maxParticipants?: number) {
    super();
    this.setEventId(eventId                || "");
    this.setEventName(eventName            || "");
    this.setEventDate(eventDate            || "");
    this.setMaxParticipants(maxParticipants || 0);
  }

  getEventId(): string               { return this.eventId; }
  getEventName(): string             { return this.eventName; }
  getEventDate(): string             { return this.eventDate; }
  getMaxParticipants(): number       { return this.maxParticipants; }
  getParticipantsRegistered(): number { return this.participantsRegistered; }

  setEventId(eventId: string): void         { this.eventId         = eventId; }
  setEventName(eventName: string): void     { this.eventName       = eventName; }
  setEventDate(eventDate: string): void     { this.eventDate       = eventDate; }
  setMaxParticipants(max: number): void     { this.maxParticipants = max; }
}