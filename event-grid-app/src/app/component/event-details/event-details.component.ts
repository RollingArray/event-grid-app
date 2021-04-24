/**
 * @author Ranjoy Sen
 * @email ranjoy.sen@mindtree.com
 * @create date 2020-03-29 15:03:17
 * @modify date 2020-03-29 15:03:17
 * @desc [description]
 */

import { Component, OnInit, OnDestroy, Injector, Input } from '@angular/core';
import { BaseFormComponent } from '../base/base-form.component';
import { ModalData } from 'src/app/shared/model/modal-data.model';
import { EventModel } from 'src/app/shared/model/event.model';

@Component({
	selector: "app-event-details",
	templateUrl: "./event-details.component.html",
	styleUrls: ["./event-details.component.scss"],
})
export class EventDetailsComponent extends BaseFormComponent implements OnInit, OnDestroy {
	private modalData: ModalData;
	@Input() event: EventModel;
	constructor(
		injector: Injector
	) {
		super(injector);
		console.log(this.event);
	}

	changeRange(valor, value){
		valor.value = value;
	}

	closeModal() {
		this.modalData = {
			cancelled: true,
			operationSubmitted: false,
		};

		// store active user
		this.dismissModal();
	}

	dismissModal() {
		this.modalController.dismiss(this.modalData).then(() => { });
	}

	ngOnInit() { }

	ngOnDestroy(): void { }
}
