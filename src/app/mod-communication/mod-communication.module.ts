import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommunicationComponent } from './communication/communication.component';

@NgModule({
  declarations: [
    CommunicationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommunicationComponent
  ]
})
export class ModCommunicationModule { }
