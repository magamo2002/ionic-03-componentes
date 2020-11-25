import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Componente } from 'src/app/interfaces/interfaces';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Observable<Componente[]>;

  //esto se traslado a menu-ops.json
  // componentes: Componente[] = [  /* este es un arreglo de tipo 'Componente' */
  //   {
  //     icon: 'american-football',
  //     name: 'Action Sheet',
  //     redirectTo: '/action-sheet'
  //   },
  //   {
  //     icon: 'briefcase-outline',
  //     name: 'Alert',
  //     redirectTo: '/alert'
  //   },
  //   {
  //     icon: 'beaker',
  //     name: 'Avatar',
  //     redirectTo: '/avatar'
  //   },
  //   {
  //     icon: 'radio-button-on',
  //     name: 'Botones y router',
  //     redirectTo: '/botones'
  //   },
  //   {
  //     icon: 'card',
  //     name: 'Cards',
  //     redirectTo: '/card'
  //   },
  //   {
  //     icon: 'checkmark-circle-outline',
  //     name: 'Checkbox',
  //     redirectTo: '/check'
  //   },
  //   {
  //     icon: 'calendar',
  //     name: 'DateTime',
  //     redirectTo: '/date-time'
  //   },
  //   {
  //     icon: 'car',
  //     name: 'Fabs',
  //     redirectTo: '/fab'
  //   },
  //   {
  //     icon: 'grid',
  //     name: 'Grid - Rows',
  //     redirectTo: '/grid'
  //   },
  //   {
  //     icon: 'infinite',
  //     name: 'Infinite Scroll',
  //     redirectTo: '/infinite-scroll'
  //   },
  //   {
  //     icon: 'hammer',
  //     name: 'Input - Forms',
  //     redirectTo: '/input'
  //   },
  //   {
  //     icon: 'list-outline',
  //     name: 'List - Sliding',
  //     redirectTo: '/list'
  //   },
  //   {
  //     icon: 'reorder-three-outline',
  //     name: 'List - Reorder',
  //     redirectTo: '/list-reorder'
  //   },
  //   {
  //     icon: 'refresh-circle-outline',
  //     name: 'Loading',
  //     redirectTo: '/loading'
  //   },
  // ];

  constructor(private menuCtrl: MenuController,
              private dataService: DataService) { }

  ngOnInit() {
    this.componentes = this.dataService.getMenuOpts();
  }

  mostrarMenu(){
    this.menuCtrl.open('first'); //first: hace referencia al id del menu, si no se manda abre el que esta por defecto
  }

}

//esto se traslada al archivo interfaces/interfaces.ts
// interface Componente { /* esto funciona como una clase mojo */
//   icon: string;
//   name: string;
//   redirectTo: string;
// }