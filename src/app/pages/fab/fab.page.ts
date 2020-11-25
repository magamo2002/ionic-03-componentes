import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fab',
  templateUrl: './fab.page.html',
  styleUrls: ['./fab.page.scss'],
})
export class FabPage implements OnInit {

  data=Array(100); //crea un arreglo de 100 elementos vacio

  constructor() { }

  ngOnInit() {
  }

}
