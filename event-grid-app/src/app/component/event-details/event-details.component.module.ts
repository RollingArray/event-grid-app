import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/module/shared.module';
import { IonicModule } from '@ionic/angular';
import { EventDetailsComponent } from './event-details.component';
import { EventThumbnailModule } from '../event-thumbnail/event-thumbnail.component.module';
@NgModule({
	imports: [
		CommonModule,
		SharedModule,
		IonicModule,
		EventThumbnailModule,
	],

	declarations: [EventDetailsComponent],
	exports: [EventDetailsComponent],
	entryComponents: [EventDetailsComponent],
})
export class EventDetailsModule { }
