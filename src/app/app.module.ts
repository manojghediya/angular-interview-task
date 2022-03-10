import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './config/core.module';
import { ModUserProfileModule } from './mod-user-profile/mod-user-profile.module';
import { ModTimelineModule } from './mod-user-profile/mod-timeline/mod-timeline.module';

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		CoreModule,
		BrowserModule,
		AppRoutingModule,
  ModUserProfileModule,
  ModTimelineModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
