import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;//esto es para acceder a un elemento de la vista, en este caso el infinitescroll

  data: any[]=Array(20);
  constructor() { }

  ngOnInit() {
  }

  loadData(event){
    console.log('Cargando siguientes ...');

    setTimeout(()=>{

      //para detener el scroll infinito al completarse mas de 50 elementos
      if(this.data.length > 50){
        event.target.complete();
        this.infiniteScroll.disabled = true;//desabilitamos el infinitescroll para que no siga apareciendo el 'Cargando ...'
        return;
      }

      const nuevoArr = Array(20);
      this.data.push(...nuevoArr);
      event.target.complete();//esto hace que se ejecute infinitamente la carga de los nuevos elementos

    }, 1000);//esta funcion se ejecutara despues de un segundo, crea un nuevo arrego de 20 elementos y se los agrega al arreglo anterior data, con el operador spread(...)
  }
}
