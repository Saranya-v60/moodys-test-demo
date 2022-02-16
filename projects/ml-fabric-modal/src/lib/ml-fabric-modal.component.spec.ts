import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MlFabricModalComponent } from './ml-fabric-modal.component';

describe('MlFabricModalComponent', () => {
  let component: MlFabricModalComponent;
  let fixture: ComponentFixture<MlFabricModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MlFabricModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MlFabricModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
