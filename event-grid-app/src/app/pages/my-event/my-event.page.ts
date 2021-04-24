import { Component, Injector, ViewChild } from "@angular/core";
import { Network } from "@capacitor/core";
import { IonContent } from "@ionic/angular";
import { takeUntil } from "rxjs/operators";
import { BaseViewComponent } from "src/app/component/base/base-view.component";
import { EventDetailsComponent } from "src/app/component/event-details/event-details.component";
import { PlatformHelper } from "src/app/shared/helper/platform.helper";
import { BaseModel } from "src/app/shared/model/base.model";
import { EventModel } from "src/app/shared/model/event.model";
import { DateService } from "src/app/shared/service/date.service";
import { EventService } from "src/app/shared/service/event.service";
import { LoadingService } from "src/app/shared/service/loading.service";
import { LocalStorageService } from "src/app/shared/service/local-storage.service";

@Component({
	selector: "app-my-event",
	templateUrl: "./my-event.page.html",
	styleUrls: ["./my-event.page.scss"]
})
export class MyEventPage extends BaseViewComponent {

	/**
	 * View child of my event page
	 */
	@ViewChild(IonContent, { static: false }) content: IonContent;

	/**
	 * Event model of my event page
	 */
	private eventModel: EventModel;

	/**
	 * Events  of my event page
	 */
	public events: EventModel[] = [];

	/**
	 * Determines whether data has
	 */
	public hasData: boolean;

	/**
	 * Last event created date of my event page
	 */
	lastEventCreatedDate: string;

	/**
	 * First event created date of my event page
	 */
	firstEventCreatedDate: string;

	/**
	 * Loading content of my event page
	 */
	loadingContent: boolean

	/**
	 * If network reachable of my event page
	 */
	ifNetworkReachable = true;

	/**
	 * Creates an instance of my event page.
	 * @param injector 
	 * @param eventService 
	 * @param loadingService 
	 * @param localStorageService 
	 * @param disableBackService 
	 * @param platformHelper 
	 * @param dateService 
	 */
	constructor(
		injector: Injector,
		private eventService: EventService,
		public loadingService: LoadingService,
		public localStorageService: LocalStorageService,
		private platformHelper: PlatformHelper,
		private dateService: DateService
	) {
		super(injector);
	}

	/**
	 * on init
	 */
	ngOnInit() {
		this.hasData = false;
	}

	/**
	 * Ions view did enter
	 */
	ionViewDidEnter() {
		this.getData();
		this.getNetworkStatus();
	}

	/**
	 * on destroy
	 */
	ngOnDestroy() {
		super.ngOnDestroy();
	}

	async getNetworkStatus() {
		//alert();

		// get status
		Network.getStatus().then(status => {
			status.connected ? this.networkReachable() : this.networkNonReachable();
		})

		// network status change
		Network.addListener('networkStatusChange', (status) => {
			status.connected ? this.networkReachable() : this.networkNonReachable();
		});
		
	}

	/**
	 * Networks reachable
	 */
	async networkReachable(){
		this.ifNetworkReachable = true;
	}

	/**
	 * Networks non reachable
	 */
	async networkNonReachable(){
		this.ifNetworkReachable = false;
	}
	
	/**
	 * Gets data
	 * @param eventModel 
	 */
	async getData() {

		// loading content
		this.loadingContent = true;

		//send api response
		this.eventService
			.getUserEvent(this.eventModel)
			.pipe(takeUntil(this.unsubscribe))
			.subscribe(async (baseModel: BaseModel) => {

				// //check if success response case back
				if (baseModel) {

					//assign data to model
					this.hasData = true;
					this.events = baseModel.data;
					this.loadingContent = false;
				}

				//stop loading
				await this.loadingService.dismiss();
				this.loadingContent = false;
			});
	}

	/**
	 * Do refresh
	 * @param event 
	 */
	async doRefresh(event) {
		await this.getData().then(_ => event.target.complete());
	}
	
	/**
	 * Event details
	 * @param selectedEventModel 
	 * @returns  
	 */
	async eventDetails(selectedEventModel: EventModel) {
		const modal = await this.modalController.create({
			component: EventDetailsComponent,
			componentProps: {
				event: selectedEventModel,
			},
		});

		modal.onDidDismiss().then((data) => {
			// any dismiss logic
		});

		return await modal.present();
	}
}
