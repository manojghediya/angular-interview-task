import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDetailsComponent } from './user-details/user-details.component';
import { UserDetailsRoutingModule } from './user-details-routing.module';
import { HeaderModule } from '../shared/header/header.module';
import { ModUserProfileModule } from '../mod-user-profile/mod-user-profile.module';
import { ModTimelineModule } from '../mod-timeline/mod-timeline.module';
import { ModEngagementTypeModule } from '../mod-engagement-type/mod-engagement-type.module';
import { ModReimbursementModule } from '../mod-reimbursement/mod-reimbursement.module';

@NgModule({
  declarations: [
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    UserDetailsRoutingModule,
    ModUserProfileModule,
    ModEngagementTypeModule,
    ModReimbursementModule,
    HeaderModule,
    ModTimelineModule
  ]
})
export class ModUserDetailsModule { }
