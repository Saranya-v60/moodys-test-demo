import { ComponentType } from '@angular/cdk/portal';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MlFabricModalService } from './ml-fabric-modal.service';
import { ModalDirective } from './modal.directive';

@Component({
  selector: 'ml-fabric-modal',
  templateUrl: './ml-fabric-modal.component.html',
  styleUrls: ['./ml-fabric-modal.scss']
})
export class MlFabricModalComponent implements OnInit {
  @Input() componentName!: ComponentType<any>;
  @Output() closeEvent = new EventEmitter();

  @ViewChild(ModalDirective, { static: true }) adModal!: ModalDirective;

  constructor(private modalService: MlFabricModalService) {
    // modalService.viewContainerRef = this.adModal.viewContainerRef;
  }

  ngOnInit(): void {
    const factory = this.adModal.viewContainerRef.createComponent(this.componentName);
  }

  ngAfterViewInit() {
    // this.modalService.viewContainerRef = this.adModal.viewContainerRef;
  }

  close() {
    this.closeEvent.emit()
    this.adModal.viewContainerRef.clear();
  }

}
