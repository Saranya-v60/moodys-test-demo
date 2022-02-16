import { Component } from '@angular/core';
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

  constructor(private mlFabricModalService: MlFabricModalService) { }

  openModal1() {
    let timer;
    const dialog1 = this.mlFabricModalService.open(Modal1Component, { hasBackdrop: false, width: '750px' });
    console.log('dialog1.instance..', dialog1);

    if (timer) {
      clearTimeout(timer)
    }

    setTimeout(() => {
      dialog1.close();
    }, 4000);

  }

  openModal2() {
    let timer;
    const dialog2 = this.mlFabricModalService.open(Modal2Component,
      {
        hasBackdrop: false,
        data: { title: 'Modal 2 Title' }
      });

    console.log('dialog2.instance..', dialog2);

    dialog2.afterClosed().subscribe(result => {
      console.log('The dialog2 was closed', result);
    });
    if (timer) {
      clearTimeout(timer)
    }

    timer = setTimeout(() => {
      dialog2.close();
    }, 2000);
  }

  ngOnInit() {

    setInterval(() => {
      this.openModal1()
      this.openModal2()
    }, 8000)

  }
}
