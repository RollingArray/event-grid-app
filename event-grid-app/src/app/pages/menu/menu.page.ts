import { Component, OnInit, OnDestroy, Injector, HostListener } from '@angular/core';
import { SwPush, SwUpdate } from '@angular/service-worker';
import { Network } from '@capacitor/core';
import { Platform } from '@ionic/angular';
import { takeUntil } from 'rxjs/operators';
import { BaseViewComponent } from 'src/app/component/base/base-view.component';
import { ArrayKey } from 'src/app/shared/constant/array.constant';
import { StringKey } from 'src/app/shared/constant/string.constant';
import { DevicePlatformEnum } from 'src/app/shared/enum/device-platform.enum';
import { BaseModel } from 'src/app/shared/model/base.model';
import { ModalData } from 'src/app/shared/model/modal-data.model';
import { UserDeviceModel } from 'src/app/shared/model/user-device.model';
import { DevicePlatformService } from 'src/app/shared/service/device-platform.service';
import { EventService } from 'src/app/shared/service/event.service';
import { PushNotificationService } from 'src/app/shared/service/push-notification.service';
import { UserDeviceService } from 'src/app/shared/service/user-device.service';
import { environment } from 'src/environments/environment';

@Component({
	selector: "app-menu",
	templateUrl: "./menu.page.html",
	styleUrls: ["./menu.page.scss"],
})
export class MenuPage extends BaseViewComponent implements OnInit, OnDestroy {
	// instance variables
	public loggedInUser: string;
	private modalData: ModalData;
	public pages = ArrayKey.APP_PRIMARY_ROUTE_PAGES;

	readonly VAPID_PUBLIC_KEY = environment.vapidKey;

	deferredPrompt: any;
	showAppInstallPrompt = false;
	showIOSPrompt = false;
	

	@HostListener('window:beforeinstallprompt', ['$event'])
	onbeforeinstallprompt(e) {
		console.log(e);
		// Prevent Chrome 67 and earlier from automatically showing the prompt
		e.preventDefault();
		// Stash the event so it can be triggered later.
		this.deferredPrompt = e;
		this.showAppInstallPrompt = true;
	}

	/**
	 * Adds to home screen
	 */
	addToHomeScreen() {
		// hide our user interface that shows our A2HS button
		this.showAppInstallPrompt = false;
		// Show the prompt
		this.deferredPrompt.prompt();
		// Wait for the user to respond to the prompt
		this.deferredPrompt.userChoice
			.then(async (choiceResult) => {
				if (choiceResult.outcome === 'accepted') {
					//await this.presentToast(baseModel.message);
					console.log('User accepted the A2HS prompt');
				} else {
					console.log('User dismissed the A2HS prompt');
				}
				this.deferredPrompt = null;
			});
	}

	/**
	 * Creates an instance of menu page.
	 * @param injector 
	 * @param pushNotificationService 
	 * @param swPush 
	 * @param userDeviceService 
	 */
	constructor(
		injector: Injector,
		private swPush: SwPush,
		private swUpdate: SwUpdate,
		private userDeviceService: UserDeviceService,
		public platform: Platform,
		private devicePlatformService: DevicePlatformService,
		private pushNotificationService: PushNotificationService,
		private eventService: EventService
	) {
		super(injector);
	}

	
	
	/**
	 * Determines whether add to home prompt ios
	 */
	async iOSAddToHomePrompt() {
		if (window.matchMedia('(display-mode: standalone)').matches) {
			this.showIOSPrompt = false;
		}
		else {
			this.showIOSPrompt = true;
		}
	}

	/**
	 * on init
	 */
	async ngOnInit() {
		if (this.devicePlatformService.getCategoricalPlatform() === DevicePlatformEnum.IOS) {
			this.iOSAddToHomePrompt();
		}

		this.checkIfAppUpdateAvailable();

		this.registerDevice()
		this.listenForMessages();
	}

	/**
	 * Ions view did enter
	 */
	async ionViewDidEnter() {
		//
	}

	/**
	 * on destroy
	 */
	ngOnDestroy() {
		super.ngOnDestroy();
	}

	/**
	 * Checks if app update available
	 */
	async checkIfAppUpdateAvailable() {

		if (this.swUpdate.isEnabled) {

			this.swUpdate.available.subscribe(() => {

				let versionUpdateMessage = `New version is available. Load New Version?`;

				if (confirm(versionUpdateMessage)) {

					window.location.reload();
				}
			});
		}
	}

	/**
	 * Listens for messages
	 */
	listenForMessages() {
		this.pushNotificationService.getMessages().subscribe(async (msg: any) => {
			const alert = await this.alertController.create({
				header: msg.notification.title,
				subHeader: msg.notification.body,
				message: msg.data.info,
				buttons: ['OK'],
			});

			await alert.present();
		});
	}

	/**
	 * Registers device
	 */
	registerDevice() {
		this.pushNotificationService.requestPermission().subscribe(
			async token => {
				const userDeviceModel: UserDeviceModel = {
					payload: token
				};
				this.userDeviceService
					.registerNewUserDevice(userDeviceModel)
					.pipe(takeUntil(this.unsubscribe))
					.subscribe(
						async (baseModel: BaseModel) => {
							if (baseModel.success) {
								await this.presentToast(baseModel.message);
							}
							else {
								await this.presentToast(baseModel.error.message);
							}

						},
						async (error) => {
							await this.presentToast('Device could not registered');
							//this.dismissModal();
						}
					);
			},
			async (err) => {
				await this.presentToast('Web Notification is not enabled for your browser');
			}
		);
	}

	/**
	 * Gets data
	 * @param eventModel 
	 */
	 async sendNotification() {
		//send api response
		this.eventService
			.getEventNotification()
			.pipe(takeUntil(this.unsubscribe))
			.subscribe(async (baseModel: BaseModel) => {
				//
			});
	}
}


