import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  personajes: string[] = ['Acuaman', 'Superman', 'Batman', 'Mujer Maravilla', 'Flash'];
  btnToggle: boolean = true;
  constructor() { }


  ngOnInit() {
  }

  doReorder(event: any) {
    console.log(event);
    //movemos en forma manual el elemento
    //1.- cortamos el elemento desde la posición de donde salio (event.detail.from)
    const itemMover = this.personajes.splice(event.detail.from, 1)[0];

    //2.- insertamos el item cortado en la posicion final
    this.personajes.splice(event.detail.to, 0, itemMover);

    console.log(this.personajes);
    event.detail.complete();
  }
}
