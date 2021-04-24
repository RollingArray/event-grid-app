import { UserDeviceService } from './shared/service/user-device.service';
import { ApiInterceptor } from "./shared/interceptor/api-interceptor.interceptor";
import { AuthGuard } from "./shared/guard/auth.guard";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { LocalStorageService } from './shared/service/local-storage.service';
import { LoadingService } from './shared/service/loading.service';
import { AlertService } from './shared/service/alert.service';
import { DatePipe, LocationStrategy, HashLocationStrategy } from '@angular/common';

//fa
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireMessagingModule } from '@angular/fire/messaging';

@NgModule({
	declarations: [
    AppComponent,
	],
	entryComponents: [
		
	],
	imports: [
    BrowserModule,
    IonicModule.forRoot({hardwareBackButton: false}),
		AppRoutingModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireMessagingModule,
	],
	providers: [
		AuthGuard,
    DatePipe,
    UserDeviceService,
    LocalStorageService,
    LoadingService,
    AlertService,
    {provide: LocationStrategy, useClass: HashLocationStrategy},
		{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
		{ provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true },
	],
	bootstrap: [AppComponent]
})
export class AppModule {}
