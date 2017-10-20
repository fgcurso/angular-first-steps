import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  items : string[] = [
    'Programar una aplicacion',
    'Aprender a diseñar paginas',
    'Aprender angular'
  ];

  constructor() { }

  ngOnInit() {
    
  }

  addItem(newItem: string) {
    if (!newItem) {
      return;
    }

    this.items.push(newItem);
  }

  deleteItem(index: number) {
    this.items.splice(index, 1);
  }

}
