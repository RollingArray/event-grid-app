import { environment } from "../../../environments/environment";

export class ApiUrls {
	public static readonly API_ENDPOINT: string = environment.apiEndpoint;
	public static readonly API_BASE_PATH: string = ApiUrls.API_ENDPOINT;

	// urls
	public static readonly USER_DEVICE_REGISTER: string = ApiUrls.API_BASE_PATH + "registerUserDevice.php";

	public static readonly ALL_EVENTS: string = ApiUrls.API_BASE_PATH + "events.php";
	public static readonly ALL_NOTIFICATIONS: string = ApiUrls.API_BASE_PATH + "sendNotification.php";
}
