import { ComponentType } from '@angular/cdk/portal';
import { Injectable, ViewContainerRef } from '@angular/core';
// import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class MlFabricModalService {

  viewContainerRef!: ViewContainerRef;

  constructor() { }

  open<T>(component?: ComponentType<T>, config?: any) {}
}
