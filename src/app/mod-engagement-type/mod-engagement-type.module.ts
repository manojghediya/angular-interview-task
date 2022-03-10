import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EngagementTypeComponent } from './engagement-type/engagement-type.component';

@NgModule({
  declarations: [
    EngagementTypeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EngagementTypeComponent
  ]
})
export class ModEngagementTypeModule { }