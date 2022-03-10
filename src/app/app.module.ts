import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './config/core.module';
import { ModUserProfileModule } from './mod-user-profile/mod-user-profile.module';
import { ModEngagementTypeModule } from './mod-engagement-type/mod-engagement-type.module';
import { ModReimbursementModule } from './mod-reimbursement/mod-reimbursement.module';
import { ModCommunicationModule } from './mod-communication/mod-communication.module';

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		CoreModule,
		BrowserModule,
		AppRoutingModule,
		ModUserProfileModule,
  ModEngagementTypeModule,
  ModReimbursementModule,
  ModCommunicationModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
