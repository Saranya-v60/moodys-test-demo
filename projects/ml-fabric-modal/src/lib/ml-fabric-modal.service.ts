import { ComponentType } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class MlFabricModalService {

  constructor(public dialog: MatDialog) { }

  open<T>(component: ComponentType<T>, config?: MatDialogConfig) {
    return this.dialog.open(component, config);
  }

}
