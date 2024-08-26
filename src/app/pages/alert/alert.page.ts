import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }

onClick(){
  this.presentAlert
}

async presentAlert(){
  const alert = await this.alertCtrl.create({
    backdropDismiss: false,
    header: 'Alert',
    subHeader: 'Subtitle',
    message: 'This is an alert message.',
    buttons: ['OK']
  });

  await alert.present();
}
}
