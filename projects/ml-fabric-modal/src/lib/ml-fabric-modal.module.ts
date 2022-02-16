import { NgModule } from '@angular/core';
import { MlFabricModalComponent } from './ml-fabric-modal.component';
import {MatDialogModule} from '@angular/material/dialog';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    MlFabricModalComponent
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
