import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MlFabricModalModule } from 'projects/ml-fabric-modal/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Modal1Component } from './modal-1/modal-1.component';
import { Modal2Component } from './modal2/modal2.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    Modal1Component,
    Modal2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MlFabricModalModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
