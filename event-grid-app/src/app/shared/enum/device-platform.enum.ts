/**
 * @author Ranjoy Sen
 * @email ranjoy.sen@rockwellcollins.com
 * @create date 2020-11-06 19:57:16
 * @modify date 2020-11-06 19:57:16
 * @desc Device Platform Enum outlines all the platforms
 */

export enum DevicePlatformEnum {
	//OS
	IOS = 'ios',
	ANDROID = 'android',

	//phone
	IPHONE = 'iphone',
	MOBILE = 'mobile',

	//tablet
	IPAD = 'ipad',
	PHABLET = 'phablet',
	TABLET = 'tablet',

	//web
	PWA = 'pwa',
	MOBILEWEB = 'mobileweb',

	//desktop
	DESKTOP = 'desktop',

	//hybrid
	HYBRID = 'hybrid',
	CORDOVA = 'cordova',
	CAPACITOR = 'capacitor',

	UNKNOWN = 'unknown',

	APPLE = 'Apple',
	CRIOS = 'CriOS',
	FXIOS = 'FxiOS',
	MAC = 'MAC'


}