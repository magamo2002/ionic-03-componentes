import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor( private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async mostrarModal(){ //async : lo usamos porque estamos trabajando con una promesa (await)
    const modal = await this.modalCtrl.create({
      component: ModalInfoPage,
      componentProps:{ //para enviarle parametros al hijo (ventana modal)
        nombre: 'Mauricio',
        pais: 'Chile'
      }
    });
    await modal.present();

    //se puede utilizar el onWillDismiss, esto nos entrega la data ANTES DE CERRAR el modal, el on DidDismiss lo entrega despues
    // const {data} = await modal.onDidDismiss(); //con esto recibimos los argumentos cuando se cierra el modal, si no vienen argumentos la respuesta es undefined
    //puede ser una variable cualquiera, recibiriamos el objeto completo, pero si ponemos {} recibimos de inmediato el json
    const { data } = await modal.onWillDismiss();
    console.log(JSON.stringify(data));
  }
}
