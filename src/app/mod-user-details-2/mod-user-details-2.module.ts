import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDetailsComponent2 } from './user-details-2/user-details-2.component';
import { UserDetailsRoutingModule } from './user-details-routing-2.module';
import { HeaderModule } from '../shared/header/header.module';
import { ModUserProfileModule } from '../mod-user-profile/mod-user-profile.module';
import { ModTimelineModule } from '../mod-timeline/mod-timeline.module';
import { ModReimbursementModule } from '../mod-reimbursement/mod-reimbursement.module';
import { ModCommunicationModule } from '../mod-communication/mod-communication.module';

@NgModule({
  declarations: [
    UserDetailsComponent2
  ],
  imports: [
    CommonModule,
    UserDetailsRoutingModule,
    ModUserProfileModule,
    ModReimbursementModule,
    HeaderModule,
    ModTimelineModule,
    ModCommunicationModule
  ]
})
export class ModUserDetailsModule2 { }
