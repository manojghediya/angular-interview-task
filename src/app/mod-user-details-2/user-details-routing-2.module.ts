import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent2 } from './user-details-2/user-details-2.component';

const routes: Routes = [
	{ path: '', component: UserDetailsComponent2 }
];

@NgModule({
	imports: [
		RouterModule.forChild(routes)
	],
	exports: [
		RouterModule
	]
})
export class UserDetailsRoutingModule { }