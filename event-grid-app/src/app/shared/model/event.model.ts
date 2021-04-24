
import { BaseModel } from './base.model';
import { SpeakersModel } from './speaker.model';

export interface EventModel extends BaseModel{
	eventId? : string,
	eventName? : string,
	eventDetails? : string,
    eventStartTime? : string,
	eventEndTime? : string,
	eventDate? : string,
	speakers?: SpeakersModel;
}

export interface EventsModel extends BaseModel{
	data? : EventModel[]
}
