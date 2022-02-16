import { TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MlFabricModalComponent } from './ml-fabric-modal.component';

import { MlFabricModalService } from './ml-fabric-modal.service';

describe('MlFabricModalService', () => {
  let service: MlFabricModalService;
  let matDialog: MatDialog;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        MatDialogModule
      ],
      providers: []
    });
    service = TestBed.inject(MlFabricModalService);
    matDialog = TestBed.inject(MatDialog);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be open modal', () => {
    spyOn(matDialog, 'open')
    service.open(MlFabricModalComponent);
    expect(matDialog.open).toHaveBeenCalledTimes(1)
  });

});
