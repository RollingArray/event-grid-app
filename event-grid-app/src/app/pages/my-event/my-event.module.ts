import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EventDetailsModule } from 'src/app/component/event-details/event-details.component.module';
import { EventThumbnailModule } from 'src/app/component/event-thumbnail/event-thumbnail.component.module';
import { NoDataModule } from 'src/app/component/no-data/no-data.component.module';
import { PanelHeaderModule } from 'src/app/component/panel-header/panel-header.component.module';
import { SharedModule } from 'src/app/shared/module/shared.module';
import { MyEventPage } from './my-event.page';

const routes: Routes = [
  {
    path: '',
    component: MyEventPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    NoDataModule,
    PanelHeaderModule,
    EventThumbnailModule,
    EventDetailsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MyEventPage]
})
export class MyEventPageModule {}
