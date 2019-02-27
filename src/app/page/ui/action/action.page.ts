import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
@Component({
  selector: 'app-action',
  templateUrl: './action.page.html',
  styleUrls: ['./action.page.scss'],
})
export class ActionPage implements OnInit {
  constructor(public actionSheetController: ActionSheetController) { }
  ngOnInit() {
  }
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Share',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Play (open modal)',
        icon: 'arrow-dropright-circle',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      },
      {
        text: 'Dismiss',
        icon: 'heart',
        handler: () => { 
          let onWill = actionSheet.onWillDismiss();
          onWill.then(()=>{
            console.log('onWill');
            console.log(new Date().getTime());
          })
          let dis = actionSheet.dismiss() 
          dis.then(()=>{
            console.log('dis');
            console.log(new Date().getTime());
          })
          let onDis = actionSheet.onDidDismiss();
          onDis.then(()=>{
            console.log('onDis');
            console.log(new Date().getTime());
          })
          console.log('Dismiss', actionSheet.dismiss);
        }, 
      },
      {
        text: 'GetTop',
        icon: 'heart',
        handler: () => {
          console.log('GetTop', actionSheet);
        }, 
      },
      {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    })
    // console.log('dismiss')
    // actionSheet.dismiss((data,role)=>{
    //   console.log('dismiss',data,role)
    // })
    await actionSheet.present();
  } 
  getTop() {
    console.log(this.actionSheetController) 
    console.log(this.actionSheetController.getTop)
    // let actionSheet = await this.actionSheetController.getTop();
    // await actionSheet.present();
    // await actionSheet(); 
  }
}
