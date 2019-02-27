import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { ModalController } from '@ionic/angular';

console.log('ExamplePageExamplePageExamplePage');
@Component({
  selector: 'app-example',
  templateUrl: './example.page.html',
  styleUrls: ['./example.page.scss'],
})
export class ExamplePage{
  // @Input() value: number;
  constructor(navParams: NavParams) { }

  ngOnInit() {
  }

}
