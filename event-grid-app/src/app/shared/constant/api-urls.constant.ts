import { environment } from "src/environments/environment";

export class ApiUrls {
	public static readonly API_ENDPOINT: string = environment.apiEndpoint;
	public static readonly API_BASE_PATH: string = ApiUrls.API_ENDPOINT;

	// urls
	public static readonly USER_DEVICE_REGISTER: string = ApiUrls.API_BASE_PATH + "register/user/device/";
	public static readonly ALL_EVENTS: string = ApiUrls.API_BASE_PATH + "all/events/";
	public static readonly ALL_NOTIFICATIONS: string = ApiUrls.API_BASE_PATH + "send/notification/";
}
