import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverInfoComponent } from '../../components/popover-info/popover-info.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor( private popoverCtrl: PopoverController) { }

  ngOnInit() {
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverCtrl.create({
      component: PopoverInfoComponent, //aqui va el componente que quiero mostrar
      event: ev,
      translucent: true,
      backdropDismiss: false //esto obliga a seleccionar una opcion para cerrar el popover
    });
    await popover.present();
    const {data}=await popover.onWillDismiss();
    console.log(data);
  }

}
