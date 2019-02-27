import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
})
export class CardPage implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log(this,'CARDPAGEJS')
    let list = {
      1:1,2:2
    }
  }

}
