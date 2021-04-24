import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { EventThumbnailComponent } from './event-thumbnail.component';


@NgModule({
  imports: [CommonModule, IonicModule],

  declarations: [EventThumbnailComponent],
  exports: [EventThumbnailComponent],
  entryComponents: [EventThumbnailComponent]
})
export class EventThumbnailModule {}
