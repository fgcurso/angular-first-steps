import { Injectable } from '@angular/core';

@Injectable()
export class TodoItemsService {

  private items : string[] = [
    'Mover esto a un servicio HTTP',
    'Al menos simular un servicio'
  ];

  constructor() { }

  getItems() : string[] {
    return this.items;
  }

}
