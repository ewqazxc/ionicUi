import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.page.html',
  styleUrls: ['./item.page.scss'],
})
export class ItemPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  favorite=(item)=>{
    console.log('favorite=',item)
  }
  share=(item)=>{
    console.log('share=',item)
  }
  unread=(item)=>{
    console.log('unread=',item)
  }
}
