import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';

const routes: Routes = [
	{
		path: '',
		redirectTo: '/go/my-events',
		pathMatch: 'full',
	},
	{
		path: '',
		component: MenuPage,
		children: [
			{
				path: 'my-events',
				loadChildren: () => import('../my-event/my-event.module').then( m => m.MyEventPageModule)
			},
		],
	},
];

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		RouterModule.forChild(routes),
	],
	declarations: [MenuPage],
})
export class MenuPageModule { }
