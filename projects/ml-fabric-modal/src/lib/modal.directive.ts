import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[adModal]',
})
export class ModalDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}