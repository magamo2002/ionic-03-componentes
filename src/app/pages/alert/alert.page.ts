import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {
  public titalert: string;
  constructor(public alertCtrl: AlertController) { }

  ngOnInit() {
    this.titalert = "Alert Page";
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });

    await alert.present();
  }

  async textAlert() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      inputs: [
        {
          name: 'newTitle',
          type: 'text',
          placeholder: 'Ingrese un titulo para el header'
        }
      ],
      buttons: [
        {
        text: 'Ok',
        handler: (data) => {
          this.titalert = data.newTitle;
        }
      }
      ]
    });

    await alert.present();
  }
}
