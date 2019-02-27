import { Component, OnInit } from '@angular/core'; 
import { ModalController } from '@ionic/angular';
import { ExamplePage } from './example/example.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: ExamplePage,
      componentProps: { value: 123 }
    });
    return await modal.present();
  }
}
