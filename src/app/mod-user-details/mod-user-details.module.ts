import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDetailsComponent } from './user-details/user-details.component';
import { UserDetailsRoutingModule } from './user-details-routing.module';
import { HeaderModule } from '../shared/header/header.module';
import { ModUserProfileModule } from '../mod-user-profile/mod-user-profile.module';
import { ModTimelineModule } from '../mod-user-profile/mod-timeline/mod-timeline.module';


@NgModule({
  declarations: [
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    UserDetailsRoutingModule,
    ModUserProfileModule,
    HeaderModule,
    ModTimelineModule
  ]
})
export class ModUserDetailsModule { }
