import { Component, TemplateRef } from '@angular/core';
import { MlFabricModalService } from 'projects/ml-fabric-modal/src/public-api';
import { Modal1Component } from './modal-1/modal-1.component';
import { Modal2Component } from './modal2/modal2.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ml-fabric-test';
  modal1 = Modal1Component;
  modal2 = Modal2Component;
  showModal1 = false;
  showModal2 = false;

  interval: any;
  clearTime!: any;

  ngOnInit() {
    this.interval = setInterval(() => {
          this.showModal1 = !this.showModal1;
          if(this.clearTime) {
            clearTimeout(this.clearTime);
          }
          this.clearTime = setTimeout(() => {
            this.showModal2 = !this.showModal2;
          }, 1000);
    }, 3000);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  
}
