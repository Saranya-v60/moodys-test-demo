/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Modal1Component } from './modal-1.component';


describe('Modal-1Component', () => {
  let component: Modal1Component;
  let fixture: ComponentFixture<Modal1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Modal1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Modal1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
