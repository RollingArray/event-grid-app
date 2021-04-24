import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { ApiUrls } from '../constant/api-urls.constant';
import { BaseModel } from '../model/base.model';
import { EventModel } from '../model/event.model';
import { BaseService } from './base.service';
import { DataCommunicationService } from './data-communication.service';
import { LocalStorageService } from './local-storage.service';


@Injectable({
	providedIn: "root"
})
export class EventService extends BaseService<EventModel> {
	
	/**
	 * Creates an instance of Event service.
	 * @param httpClient 
	 * @param localStorageService 
	 * @param alertController 
	 * @param dataCommunicationService 
	 */
	constructor(
		httpClient: HttpClient,
		localStorageService: LocalStorageService,
		alertController: AlertController,
		dataCommunicationService: DataCommunicationService
	) {
		super(
			httpClient,
			localStorageService,
			alertController,
			dataCommunicationService
		);
	}

	/**
	 * Gets user Event
	 * @param EventModel 
	 * @returns user Event 
	 */
	getUserEvent(eventModel: EventModel): Observable<BaseModel> {
		return this.get(`${ApiUrls.ALL_EVENTS}` );
	}
}
