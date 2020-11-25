import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  usuarios: Observable<any>;

  @ViewChild(IonList) ionList: IonList; //para hacer referencia a un objeto de la pagina, en este caso el unico ion-list, si hay mas de uno lo identificamos con un id y hacemos
                                        //referencia a el por ese dato

  constructor( private dataService: DataService ) { }

  ngOnInit() {
    // this.dataService.getUsuarios().subscribe(console.log);
    this.usuarios = this.dataService.getUsuarios();
  }

  favorite(user: any){
    console.log(user);
    this.ionList.closeSlidingItems(); //esto para cerrar el ion-list despues de la acción de favorito
  }

  share(user: any){
    console.log(user);
    this.ionList.closeSlidingItems(); //esto para cerrar el ion-list despues de la acción de share
  }

  delete(user: any){
    console.log(user.name);
    this.ionList.closeSlidingItems(); //esto para cerrar el ion-list despues de la acción de delete
  }
}
