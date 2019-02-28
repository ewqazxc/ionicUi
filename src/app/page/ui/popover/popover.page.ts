import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor(public popoverController: PopoverController) { }

  ngOnInit() {
  }
  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverPage,//PopoverComponent,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }
  async presentQueryPopover() {
    const popoverController = document.querySelector('ion-popover-controller');
    await popoverController.componentOnReady();
  
    const popoverElement = await popoverController.create({
      component: 'profile-page',
      event: event
    });
    return await popoverElement.present();
  }
}
