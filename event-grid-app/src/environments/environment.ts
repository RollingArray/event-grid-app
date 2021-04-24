// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiEndpoint: 'https://rollingarray.co.in/event-grid/api/v1/',
  vapidKey: "BC6677Dj4f9RpCqCzfl1NtQqA8CMxuwZaNMJzM-UJjQ0nFkQhHFd1Xy_2e7wRRZyYmpalkuErvf_fdrFS_T1wBU",
  firebaseConfig : {
    apiKey: "AIzaSyAkc2gykXzcNdw2WTEQ5Q94yIyab8TvNiQ",
    authDomain: "event-grid.firebaseapp.com",
    projectId: "event-grid",
    storageBucket: "event-grid.appspot.com",
    messagingSenderId: "149560320630",
    appId: "1:149560320630:web:f76baceff60678ba7fb557"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
