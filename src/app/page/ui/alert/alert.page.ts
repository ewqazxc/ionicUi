import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {
  ngOnInit() {
  }
  constructor(public alertController: AlertController) {}
  async backdropDismissAlert() {
    const alert = await this.alertController.create({
      header: 'backdropDismissAlert',
      subHeader: '小标题',
      message: '提示信息',
      buttons: ['确定'],
      backdropDismiss:false,//默认true
    });

    await alert.present();
  }
  async animatedAlert() {
    const alert = await this.alertController.create({
      header: 'animated false',
      subHeader: '小标题',
      message: '提示信息',
      buttons: ['确定'],
      animated:false,//默认true
    }); 
    await alert.present();
  }
  async translucentAlert() {
    const alert = await this.alertController.create({
      header: '半透明弹框translucent头',
      subHeader: '小标题',
      message: '提示信息',
      buttons: ['确定'],
      translucent:true,
    });

    await alert.present();
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: '基本弹框提示头',
      subHeader: '小标题',
      message: '提示信息',
      buttons: ['确定']
    });

    await alert.present();
  }

  async presentAlertMultipleButtons() {
    const alert = await this.alertController.create({
      header: '多选弹框提示头',
      subHeader: '小标题',
      message: '提示信息',
      buttons: ['按钮一', '按钮2', '按钮3']
    });

    await alert.present();
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: '操作弹框提示头',
      subHeader: '小标题',
      message: '提示信息',
      buttons: [
        {
          text: '取消',
          role: 'cancel',//handler对象
          cssClass: 'secondary', 
          handler: (blah) => {
            console.log('Confirm Cancel: blah :',blah);
          }
        }, {
          text: '确定',
          role: 'ok',
          handler: (value) => {
            console.log('Confirm Okay',value);
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      header: '可编辑弹框头',
      translucent:true,//????
      inputs: [
        {
          name: 'name',//字段名
          type: 'text',//文本
          placeholder: '你的名字~'//提示文本
        },
        {
          name: 'say',
          type: 'text',
          id: 'name2-id',
          value: 'hello',//值
          placeholder: '说些什么'
        },
        {
          name: 'webSite',
          value: 'http://ionicframework.com',
          type: 'url',
          placeholder: '个人网站'
        },
        // input date with min & max
        {
          name: 'name4',
          type: 'date',
          min: '2011-01-01',//单位必须有0
          max: '2011-11-11'
        },
        // input date without min nor max
        {
          name: 'name5',
          type: 'date'
        },
        {
          name: 'name6',
          type: 'number',
          placeholder: '-5~10X',//没用！！！
          min: -5,
          max: 10
        },
        {
          name: 'name7',
          type: 'number',
          placeholder: '随便填数字'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (value) => {
            console.log('Confirm Cancel value：',value);
          }
        }, {
          text: 'Ok',
          handler: (value) => {
            console.log('Confirm Ok value：',value);
            if(value.name==''){
              this.presentAlert();
              return false;//阻止关闭
            }
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlertRadio() {
    const alert = await this.alertController.create({
      header: '单选列表弹框头',
      subHeader: '小标题',
      message: '提示信息',
      inputs: [ //选项
        {
          name: 'radio1',
          type: 'radio',//类型
          label: 'Radio 1',//显示值
          value: 'value1',//选中值
          checked: true
        },
        {
          name: 'radio1',
          type: 'radio',
          label: 'Radio 2',
          value: 'value2'
        },
        {
          name: 'radio3',
          type: 'radio',
          label: 'Radio 3',
          value: 'value3'
        },
        {
          name: 'radio4',
          type: 'radio',
          label: 'Radio 4',
          value: 'value4'
        },
        {
          name: 'radio5',
          type: 'radio',
          label: 'Radio 5',
          value: 'value5'
        },
        {
          name: 'radio6',
          type: 'radio',
          label: 'Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 ',
          value: 'value6'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (value) => {
            console.log('Confirm Ok',value);
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlertCheckbox() {
    const alert = await this.alertController.create({
      header: '多选列表弹框头',
      inputs: [
        {
          name: 'checkbox1',
          type: 'checkbox',
          label: 'Checkbox 1',
          value: 'value1',
          checked: true
        },

        {
          name: 'checkbox2',
          type: 'checkbox',
          label: 'Checkbox 2',
          value: 'value2'
        },

        {
          name: 'checkbox3',
          type: 'checkbox',
          label: 'Checkbox 3',
          value: 'value3'
        },

        {
          name: 'checkbox4',
          type: 'checkbox',
          label: 'Checkbox 4',
          value: 'value4'
        },

        {
          name: 'checkbox5',
          type: 'checkbox',
          label: 'Checkbox 5',
          value: 'value5'
        },

        {
          name: 'checkbox6',
          type: 'checkbox',
          label: 'Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6',
          value: 'value6'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (value) => {
            console.log('Confirm Ok',value);
          }
        }
      ]
    });

    await alert.present();
  }
}
