import { Component, Injector, Input, OnInit } from '@angular/core';
import { EventModel } from 'src/app/shared/model/event.model';
import { BaseViewComponent } from '../base/base-view.component';

@Component({
	selector: "app-event-thumbnail",
	templateUrl: "./event-thumbnail.component.html",
	styleUrls: ["./event-thumbnail.component.scss"],
})
export class EventThumbnailComponent extends BaseViewComponent implements OnInit {

	@Input() event!: EventModel;
	@Input() isDetailView!: boolean;

	constructor(
		injector: Injector
	) {
		super(injector);
	}

	ngOnInit() { }
}
