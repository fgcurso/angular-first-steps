import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class TodoItemsService {

  private items : string[] = [
    'Mover esto a un servicio HTTP',
    'Al menos simular un servicio'
  ];

  constructor() { }

  getItems() : Observable<string[]> {
    return Observable.of(this.items);
  }

}
