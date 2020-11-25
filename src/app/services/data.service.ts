import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Componente } from '../interfaces/interfaces';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient ) { }

  getUsuarios(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getMenuOpts(){
    return this.http.get<Componente[]>('/assets/data/menu-ops.json'); //Componente : es el tipo de dato que va a devolver la llamada al archivo json, que para este caso es un arreglo
  }

  getAlbumes(){
    return this.http.get<any>('https://jsonplaceholder.typicode.com/albums');
  }

  getHeroes(){
    return this.http.get<Componente[]>('/assets/data/superheroes.json')
                .pipe(
                  delay( 1500 ) //para dar la demora de un segundo y medio en la carga
                ); 
  }
}
