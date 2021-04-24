import { BaseModel } from './base.model';

export interface SpeakerModel extends BaseModel{
	speakerId? : string,
	speakerName? : string
}

export interface SpeakersModel extends BaseModel{
	data? : SpeakerModel[]
}

