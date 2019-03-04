import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.page.html',
  styleUrls: ['./select.page.scss'],
})
export class SelectPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  customAlertOptions: any = {
    header: 'Header',
    subHeader: 'subHeader',
    message: 'message',
    translucent: true//半透明
  };

  customPopoverOptions: any = {
    header: 'Hair Color',
    subHeader: 'Select your hair color',
    message: 'Only select your dominant hair color',
    translucent: true//半透明 无用 
  };

  customActionSheetOptions: any = {
    header: 'Colors',
    subHeader: 'Select your favorite color',
    translucent: true//半透明 无用 
  };
}
