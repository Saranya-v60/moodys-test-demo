import { inject, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';
import { MlFabricModalModule, MlFabricModalService } from 'projects/ml-fabric-modal/src/public-api';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  let mlFabricModalService: MlFabricModalService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MlFabricModalModule,
        MatDialogModule,
        MatButtonModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [MlFabricModalService]
    }).compileComponents();
  });
  beforeEach(() => {
    mlFabricModalService = TestBed.inject(MlFabricModalService);
  })

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ml-fabric-test'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ml-fabric-test');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('ml-fabric-test app is running!');
  });

  it('should call open modal1 ', () => {
    spyOn(mlFabricModalService, 'open')
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.openModal1();
    expect(mlFabricModalService.open).toHaveBeenCalled()
  });

  it('should call open modal2 ', () => {
    spyOn(mlFabricModalService, 'open')
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.openModal2();
    expect(mlFabricModalService.open).toHaveBeenCalled()
  });


});
