import { NgModule } from '@angular/core';
import { MlFabricModalComponent } from './ml-fabric-modal.component';
import {MatDialogModule} from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { ModalDirective } from './modal.directive';


@NgModule({
  declarations: [
    MlFabricModalComponent,
    ModalDirective
  ],
  imports: [
    CommonModule,
    MatDialogModule
  ],
  exports: [
    MlFabricModalComponent
  ]
})
export class MlFabricModalModule { }
