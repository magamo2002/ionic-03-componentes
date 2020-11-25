import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  loading: HTMLIonLoadingElement;

  constructor(private loadingCtrl: LoadingController) { }

  ngOnInit() {
  }

  mostrarLoading(){
    this.presentLoading();

    // esperar dos segundos
    setTimeout(()=>{
      this.loading.dismiss(); // apaga el loading
    },2000);
  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({
      message: 'Cargando...'
      // duration: 2000
    });
    await this.loading.present();
  }
}
