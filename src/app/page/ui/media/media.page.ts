import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media',
  templateUrl: './media.page.html',
  styleUrls: ['./media.page.scss'],
})
export class MediaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public items = [{text:'hehe',src:'http://www.ionic.wang/statics/index/images/ionic/04.png'}];
}
